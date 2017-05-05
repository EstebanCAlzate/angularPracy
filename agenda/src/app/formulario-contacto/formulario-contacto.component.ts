import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'formulario-contacto',
    templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
    styles:[`
        button:disabled {
            background-color: #EE82EE;
            border: 1px solid purple;
        }
        input:focus{
            border: 1px solid #EE82EE;
        }
    `]
})

export class FormularioContactComponent   {

    guardarContacto(contactoForm:FormGroup){
        console.log(contactoForm);
    }    
}