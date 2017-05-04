import { Component, OnInit, Injectable } from '@angular/core';
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

  constructor(private _contactosService: ContactoService){}  //con esto ya podemos acceder a los servicios

  ngOnInit(): void {
    this.listaContactos = this._contactosService.ObtenerContactos();
  }

  mostrarDetalles(contacto:Contacto):void{
    this.contactoSeleccionado = contacto;
  }
}
