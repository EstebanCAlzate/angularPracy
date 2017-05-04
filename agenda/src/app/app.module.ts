import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {CajaComponent } from './ejemplos/caja.component';
import {EjemplosBindingComponent } from './ejemplos/ejemplos-binding.component';
import {EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';
import { listaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactoService } from './servicios/contactos.service';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';


interface Coche {
  ruedas: number;
}

@NgModule({ 
  imports:[  //tdos los modulos que necesita mi app 
    BrowserModule,
    FormsModule
    ], 
  declarations: [  //toos los componentes, directivas y pipes  que necesita
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    listaContactosComponent,
    DetallesContactoComponent
     ],
  providers: [ // metemos los servicios
    ContactoService
  ],
  bootstrap:    [ AppComponent ] //componente raiz de nyestra app
})
export class AppModule { }
