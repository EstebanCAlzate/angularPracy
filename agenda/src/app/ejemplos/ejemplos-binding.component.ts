import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-binding',
    templateUrl: '/app/ejemplos/ejemplos-binding.component.html',
    styles: [`
              .caja {
                width: 50px;
                height: 50px;
                background-color: red;
              }
      `]
})

export class EjemplosBindingComponent {

    constructor() { }

    /*n:number = 0; Ejemplo de utilziacion de binding
    constructor(){
    setInterval(()=>{
        this.alumnos = 'Angular '+this.n++;
    },1000);
    }*/

    alumnos: string = 'Angular';
    //biding propiedades
    textAreaLineas: number = 7;
    //bindign de clases
    pintamosClase: boolean = true;
    numSuerte: number = 4;

    //bindign de estilos 
    obtenerColor(): string {
        return 'green';
    }

    //bindig de stilo con ng, las propiedas sin guiones   
    obtenerStilos(): any {
        return {
            backgroundColor: 'red',
            color: 'white'
        }
    }
    //binding de eventos: son los eventos nativos de html
    mostrar() {
        alert('Hola señores');
    }
}