import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

import {Jsonp, Response, URLSearchParams,RequestOptions } from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'ejemplos-observables',
    template: '!!'//./observables-ejemplos.component.html'
})

export class observablesEjemplosComponent  {

    private _miObservable$: Observable<any> = 
        Observable.create((observador: Observer<any>)=>{
            //con el observador puedo emitir valores, errores o indicar que he terminado
            console.log('voy a emitir');
            observador.next('Buenos dias!!');
            // observador.next(true);
            // observador.next(12345);

            //emitimos un error
            // observador.error('Se ha roto la cosa')
            //al emitir el error no se vuelve a ejecutar el observable.

            //emitimos evento completado
            observador.complete();
        })

    constructor() {
        this._miObservable$.subscribe(
            (dato)=>{
            //se puede seguir llamando al observalbe para que siga emitiendo continuamente
            console.log(`DATO RECIBIDO DESDE EL OBSERVABLE (NEXT) ${dato}`)
        }, (error) =>{
            console.log(`dato de error (NEXT) ${error}`)
            console.error(`dato de error (NEXT) ${error}`)
        }, ()=>{
            console.log(`He terminado`)
        });
     }
}

//ejemplo de observables con operadores
@Component({
    selector: 'ejemplos-observables-wikipedia',
             //<li *ngFor="let resultado of resultados ">
    template: `
        <div>
        <input (input)="buscarWikipedia($event)"/>
            <ul>
                <li *ngFor="let resultado of subscripcionCajaTexto | async">
                    {{resultado}}</li>
            </ul>
        </div>
        `
})

export class EjemploObservablesWikipeiaComponennt implements OnDestroy{
    private _flujoDeDatosCajaTexto: Subject<string> 
        = new Subject(); 

    resultados: string[];
    // subscripcionCajaTexto:Subscription; ASYNC
    subscripcionCajaTexto:any;

//injectamos jsonp
    constructor(private _jsonp: Jsonp){
        this.subscripcionCajaTexto = 
            this._flujoDeDatosCajaTexto
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((palabra:string)=>{
                console.log('voy a buscar: ',palabra);
                return this.peticionBusqueda(palabra);
            })
            // .subscribe(dato =>{
            //     console.log('emite dato', dato);
            // })
            //para desuscribirte hayq ue guardar el subscribe
            //para el cambio ASYNC
            // .subscribe(resultados =>{
            //     this.resultados = resultados;
            // });
    }

    buscarWikipedia(evento:KeyboardEvent){
        //hacemos emision de eventos
        console.log('evento', evento);
        //Vamos a tipificar el dato 
        const datoEmitir = (evento.target as HTMLInputElement).value;
        this._flujoDeDatosCajaTexto.next(datoEmitir);
    }

    peticionBusqueda(palabra:string):Observable<any>{
        //busqueda a la wikipedia con jsonP
        const parametros:URLSearchParams = new URLSearchParams();
        parametros.set('search', palabra);
        parametros.set('action', 'opensearch');
        parametros.set('format', 'json');
        parametros.set('callback', 'JSONP_CALLBACK');

        let opciones:RequestOptions = new RequestOptions();
        opciones.search = parametros;

        return this._jsonp
            .get('http://en.wikipedia.org/w/api.php',opciones)
            .map((respuesta: Response)=>{
                console.info('ea', respuesta.json());
                return respuesta.json()[1];
            })
    }

    ngOnDestroy():void{
        //nos desuscribimos del observable
        this.subscripcionCajaTexto.unsubscribe();
    }
}