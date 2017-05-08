import { Component } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactoService } from '../servicios/contactos.service';
@Component({
    template: `<formulario-contacto (formularioAceptado)="guardarContacto($event)" >
                aceptado</formulario-contacto>`
}) export class NuevoContactoComponent {
    
    //con esto ya podemos acceder a los servicios
    constructor(private _contactosService: ContactoService) { } 

    guardarContacto(contacto: Contacto) {
        this._contactosService.guardarContacto(contacto)
            .subscribe(contacto => {
                alert('creado');
            });
    }
}