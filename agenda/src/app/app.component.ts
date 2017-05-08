import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { Contacto } from './entidades/contacto';
import { ContactoService } from './servicios/contactos.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
