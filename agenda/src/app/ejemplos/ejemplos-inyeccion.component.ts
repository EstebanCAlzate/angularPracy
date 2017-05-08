import { Component, Injectable, OnInit } from '@angular/core';


//inyeccion de dependencias usando decorador
@Injectable()
export class Servicio1 {
    obtenerMensaje() { return 'Soy un servicio decorado con @injectable' };
}

//no es bonito hacer esto pero solo por ejemplo hacer mas class en un mismo .ts
export class Servicio2 {
    obtenerMensaje() { return 'Soy un servicio decorado que usa provedor de clase' };
}

//cuando llaaman a servicio2 usa la clase servicio2
export const Servicio2Provider = {
    provide: Servicio2,
    useClass: Servicio2
}

@Component({
    selector: 'ejemplos-inyeccion',
    templateUrl: './ejemplos-inyeccion.component.html'
})

export class EjemplosInyeccionComponent {

    mensaje1: string;
    mensaje2: string;

    constructor(
        private _servicio1: Servicio1,
        private _servicio2: Servicio2
    ) { }

    OnInit() {
        this.mensaje1 = this._servicio1.obtenerMensaje();
        this.mensaje2 = this._servicio2.obtenerMensaje();
    }
}