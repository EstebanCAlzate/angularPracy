import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactoService {

    ObtenerContactos(): Contacto[] {
        return [
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