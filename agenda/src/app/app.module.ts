import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {CajaComponent } from './caja.component';

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
    CajaComponent
     ],
  providers: [ // metemos los servicios

  ],
  bootstrap:    [ AppComponent ] //componente raiz de nyestra app
})
export class AppModule { }
