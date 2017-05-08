import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ejemplos-componentes',
    templateUrl: './ejemplos-componentes.component.html'
})

export class EjemplosComponentesComponent  {
    constructor() { }

    //bindign biridecional
    escribeMensaje(mensaje: string) {
        console.log(mensaje);
    }
}