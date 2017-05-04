import { Component, OnInit } from '@angular/core';
import { Contacto } from './entidades/contacto';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',

})
export class AppComponent implements OnInit {


  listaContactos: Contacto[];

  ngOnInit(): void {
    this.listaContactos =
      [
        {
          nombre: 'Jonh nieve',
          email: 'jonh.nieve@invernalia.com',
          telefono: '6756164'
        },
        {
          nombre: 'Tyrion',
          email: 'tyrion.lanister@roca.com',
          telefono: '64844254'
        },
        {
          nombre: 'Zyon',
          email: 'zyon.greyjoy@isla.com',
          telefono: '675174'
        }
      ];
  }
}
