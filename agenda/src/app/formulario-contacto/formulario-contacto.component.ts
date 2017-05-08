import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './formulario-contacto.component.html',
    styleUrls: [ './formulario-contacto.component.css']
})

export class FormularioContactComponent   {

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    guardarContacto(contactoForm:FormGroup){
        console.log(contactoForm);
        const contacto:Contacto = Contacto.desdeJSON(contactoForm.value);
        this.formularioAceptado.emit(contacto);
    }    
}