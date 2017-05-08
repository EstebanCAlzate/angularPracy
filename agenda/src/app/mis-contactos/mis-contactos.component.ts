import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactoService } from '../servicios/contactos.service';
@Component({
    templateUrl:'./mis-contactos.component.html'
})
export class MisContactosComponent implements OnInit{
    //propiedades
    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    constructor(private _contactosService: ContactoService) { }

    ngOnInit(): void {
        this._contactosService.obtenerContactos()
            .subscribe(contactos => {
                this.listaContactos = contactos;
            });
    }

    mostrarDetalles(contacto: Contacto): void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string) {
        console.log('navegar ', ruta);
        window.open(ruta, '_blank');
    }

}