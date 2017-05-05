import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { Contacto } from './entidades/contacto';
import { ContactoService } from './servicios/contactos.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',

})
export class AppComponent implements OnInit {

  //propiedades
  listaContactos: Contacto[];
  contactoSeleccionado: Contacto;

  constructor(private _contactosService: ContactoService) { }  //con esto ya podemos acceder a los servicios

  ngOnInit(): void {
    this._contactosService.ObtenerContactos()
      .subscribe(contactos =>{
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

   guardarContacto(contacto: Contacto) {
    this._contactosService.guardarContacto(contacto)
                          .subscribe(contacto =>{});
  }
}
