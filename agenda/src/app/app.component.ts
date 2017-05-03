import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{alumnos}}</h1>
            <h2> y el numero de la suerte es : {{numSuerte}} </h2>
            <textarea [rows]='textAreaLineas'></textarea>
            <div [class.caja]='pintamosClase'></div>
            <p [style.color]='obtenerColor()'> parrafo con color</p>
            <p [ngStyle]='obtenerStilos()'>parrafo con stilo</p>
            <button (click)='mostrar()' >mostrar mensaje</button>
            <input [(ngModel)]='mensaje' type='text'/>
            {{mensaje}}
            `,
  styles: [`
          .caja {
            width: 50px;
            height: 50px;
            background-color: red;
          }
  `]
  
})
export class AppComponent  { 
  alumnos: string = 'Angular';

  /*n:number = 0; Ejemplo de utilziacion de binding
  constructor(){
    setInterval(()=>{
      this.alumnos = 'Angular '+this.n++;
    },1000);
  }*/

  //biding propiedades
  textAreaLineas:number = 7;
  //bindign de clases
  pintamosClase:boolean = true;
  numSuerte:number = 4;

  //bindign de estilos 
  obtenerColor():string{
    return 'green';
  }

  //bindig de stilo con ng, las propiedas sin guiones   
  obtenerStilos():any{
    return {
      backgroundColor: 'red',
      color: 'white'
    }
  }

//binding de eventos: son los eventos nativos de html
  mostrar(){
    alert('Hola señores');
  }

  //bindign biridecional

  mensaje: string = 'cambiame'
 }
 