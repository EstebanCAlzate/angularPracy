import { Injectable,Inject, OpaqueToken } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // añade una funcion map a los observables
import { Contacto } from '../entidades/contacto';
import { Direcciones } from '../configuracion/direcciones';

@Injectable()
export class ContactoService {

    constructor(
        private _http: Http,
        @Inject(Direcciones) private _direcciones: string ) { }

    // hacemos un array de llamadas al metodo de crear contactos
    obtenerContactos(): Observable<Contacto[]> {
        // return this._contactos;
        //lo cambiamos por una peticion http
        return this._http
            .get(`${this._direcciones}/contactos`)
            .map(res => {
                const lista: any[] = res.json();
                //este map es el de recorrer y hacer cosas con cada elemento
                //convertimos en una lista de contactos y la devolvemos
                return lista.map(elemento => {
                    return Contacto.desdeJSON(elemento);
                });
            });
    }

    //creamos un contacto en el servidor.
    guardarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
            .post(`${this._direcciones}/contactos`, contacto)
            .map(res => Contacto.desdeJSON(res.json()));
    }

    //eliminamos un contacto del servidor
    eliminarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
            .delete(`${this._direcciones}/contactos/contactos/${contacto.id}`)
            .map(res => Contacto.desdeJSON(res.json()));
            //lo que responda el servidor lo convertimos en tipo contacto
    }

    //actualizamos un contacto en el servidor
    editarContacto(contacto: Contacto): Observable<Contacto>{
        return this._http
            .put(`${this._direcciones}/contactos/contactos/${contacto.id}`, contacto)
            .map(res => Contacto.desdeJSON(res.json()));
    }
}
