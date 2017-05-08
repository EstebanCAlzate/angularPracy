import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Contacto } from '../entidades/contacto';
import { Observable } from 'rxjs/Observable';
import { ContactoService } from './contactos.service';

@Injectable() export class ContactosResolve implements Resolve<Contacto[]>{

    constructor (private _contactosService: ContactoService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Contacto[]>{
        return this._contactosService.obtenerContactos();
    }
}
//se encargar de resolver rutas