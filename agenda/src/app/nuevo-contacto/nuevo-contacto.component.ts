import { Component } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactoService } from '../servicios/contactos.service';
import { Router } from '@angular/router';
@Component({
    template: `<formulario-contacto (formularioAceptado)="guardarContacto($event)" >
                aceptado</formulario-contacto>`
}) export class NuevoContactoComponent {
    
    //con esto ya podemos acceder a los servicios
    constructor(
        private _contactosService: ContactoService,
        private _router: Router ) { } 

    guardarContacto(contacto: Contacto) {
        this._contactosService.guardarContacto(contacto)
            .subscribe(contacto => {
                //navegacion por codigo.
                this._router.navigate(['mis-contactos']); 
                // ese mis-contactos lo mira de routing
            });
    }
}