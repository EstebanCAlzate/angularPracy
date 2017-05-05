import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // añade una funcion map a los observables
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactoService {

    constructor(private _http: Http){}

    // private _contactos: Contacto[] =
    // [
    //     Contacto.desdeJSON({
    //         id: 1,
    //         nombre: 'Jonh ',
    //         apellidos: 'nieve',
    //         email: 'jonh.nieve@invernalia.com',
    //         telefono: '6756164',
    //         twitter: 'jonhnieve',
    //         facebook: 'JonhSnow',
    //         avatar: ''
    //     }),
    //     Contacto.desdeJSON({
    //         id: 2,
    //         nombre: 'Tyrion',
    //         apellidos: 'lanister',
    //         email: 'tyrion.lanister@roca.com',
    //         telefono: '64844254',
    //         twitter: 'jonhnieve',
    //         facebook: 'TyrionLannister',
    //         avatar: ''
    //     }),
    //     Contacto.desdeJSON({
    //         id: 3,
    //         nombre: 'Zyon',
    //         apellidos: 'grey',
    //         email: 'zyon.greyjoy@isla.com',
    //         telefono: '675174',
    //         twitter: 'jonhnieve',
    //         facebook: 'AlfieAllen',
    //         avatar: ''
    //     })
    // ];


    // hacemos un array de llamadas al metodo de crear contactos
    ObtenerContactos(): Observable<Contacto[]> {
        // return this._contactos;
        //lo cambiamos por una peticion http
        return this._http
            .get('http://localhost:3004/contactos')
            .map(res =>{
                const lista: any[] = res.json();
                //este map es el de recorrer y hacer cosas con cada elemento
                //convertimos en una lista de contactos y la devolvemos
                return lista.map(elemento =>{
                    return Contacto.desdeJSON(elemento);
                });
            });
    }

    guardarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
            .post('http://localhost:3004/contactos', contacto)
            .map(res => Contacto.desdeJSON(res.json()));
    }
}
