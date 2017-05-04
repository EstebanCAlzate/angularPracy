import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ejemplos-componentes',
    templateUrl: '/app/ejemplos/ejemplos-componentes.component.html'
})

export class EjemplosComponentesComponent  {
    constructor() { }

    //bindign biridecional
    escribeMensaje(mensaje: string) {
        console.log(mensaje);
    }
}