import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // añade una funcion map a los observables
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactoService {

    constructor(private _http: Http){}

    // hacemos un array de llamadas al metodo de crear contactos
    obtenerContactos(): Observable<Contacto[]> {
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
