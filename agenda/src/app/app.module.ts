import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {CajaComponent } from './ejemplos/caja.component';
import {EjemplosBindingComponent } from './ejemplos/ejemplos-binding.component';
import {EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';
import { listaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactoService } from './servicios/contactos.service';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { EjemplosInyeccionComponent, Servicio1, Servicio2, Servicio2Provider } from './ejemplos/ejemplos-inyeccion.component';
import { FormularioContactComponent } from './formulario-contacto/formulario-contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ContactosResolve } from './servicios/contactos-resolve.service';
import { ProveedorDirecciones } from './configuracion/direcciones';
import { observablesEjemplosComponent, EjemploObservablesWikipeiaComponennt } from './ejemplos/observables-ejemplos.component';
import { EjemplosPipeComponent } from './ejemplos/ejemplos-pipe.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';


interface Coche {
  ruedas: number;
}

@NgModule({ 
  imports:[  //tdos los modulos que necesita mi app 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule
    ], 
  declarations: [  //toos los componentes, directivas y pipes  que necesita
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    listaContactosComponent,
    DetallesContactoComponent,
    EjemplosInyeccionComponent,
    FormularioContactComponent,
    MisContactosComponent,
    NuevoContactoComponent,
    observablesEjemplosComponent,
    EjemploObservablesWikipeiaComponennt,
    EjemplosPipeComponent,
    OrdenarPipe
     ],
  providers: [ // metemos los servicios
    ContactoService,
    Servicio1, //tiene @injectable
    Servicio2Provider,
    ContactosResolve,
    ProveedorDirecciones
  ],
  bootstrap:    [ AppComponent ] //componente raiz de nyestra app
})
export class AppModule { }
