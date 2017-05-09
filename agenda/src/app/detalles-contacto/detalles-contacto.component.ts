import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'detalles-contacto',
    templateUrl: './detalles-contacto.component.html',
    styleUrls: ['./detalles-contacto.component.css']
})

export class DetallesContactoComponent {

    @Input() contacto:Contacto;
    
    @Output() verFb:EventEmitter<string> = new EventEmitter();
    @Output() verTw:EventEmitter<string> = new EventEmitter();
    @Output() eliminar:EventEmitter<Contacto> = new EventEmitter();
    

    notificarFb(){
        this.verFb.emit(this.contacto.generarRutaFb());
    }
    notificarTw(){
        this.verTw.emit(this.contacto.generarRutaTw());
    }
    notificarEliminacion(){
        this.eliminar.emit(this.contacto);
    }
}