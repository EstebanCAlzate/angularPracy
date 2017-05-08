import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../entidades/contacto';
import { ContactoService } from '../servicios/contactos.service';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './formulario-contacto.component.html',
    styleUrls: [ './formulario-contacto.component.css']
})

export class FormularioContactComponent   {

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    rutaAvatar: string = '';

    constructor(private _contactosService: ContactoService){}

    ngOnInit(){
        this._contactosService.generarRutaAvatar()
                               .subscribe(ruta=>{
                                this.rutaAvatar = ruta;
                               })
    }

    guardarContacto(contactoForm:FormGroup){
        console.log(contactoForm);
        const contacto:Contacto = Contacto.desdeJSON(contactoForm.value);
        contacto.avatar = this.rutaAvatar;
        this.formularioAceptado.emit(contacto);
    }    
}