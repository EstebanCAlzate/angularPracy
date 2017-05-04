import {Component,Input,Output,EventEmitter} from  '@angular/core';

@Component({
    selector: 'caja',
    template : `
                <div [style.backgroundColor]="color"
                (mouseenter)="notificar()"
                ></div>
    `,
    styles: [`
        div{
        width: 100px;
        height: 100px;
        }`]
})


export class CajaComponent {
    //recibimos color como parametro de entrada al componente
    @Input() color:string = 'green';
    
    //definimos un emitor de eventos hacia el padre
    @Output() encima:EventEmitter<string> = new EventEmitter();

    //utilizamos el decorador output, emitimos el evento al padre
    notificar(){
        console.log("pasamos el raton por encima");
        this.encima.emit( `El color de la caja es ${this.color}` );
    }
}