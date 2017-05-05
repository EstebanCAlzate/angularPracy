import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactoService {


// hacemos un array de llamadas al metodo de crear contactos
    ObtenerContactos(): Contacto[] {
        return [
            Contacto.desdeJSON({
                id: 1,
                nombre: 'Jonh ',
                apellidos: 'nieve',
                email: 'jonh.nieve@invernalia.com',
                telefono: '6756164',
                twitter: 'jonhnieve',
                facebook: 'JonhSnow',
                avatar: ''
            }),
            Contacto.desdeJSON({
                id: 2,
                nombre: 'Tyrion',
                apellidos: 'lanister',
                email: 'tyrion.lanister@roca.com',
                telefono: '64844254',
                twitter: 'jonhnieve',
                facebook: 'TyrionLannister',
                avatar: ''
            }),
            Contacto.desdeJSON({
                id: 3,
                nombre: 'Zyon',
                apellidos: 'grey',
                email: 'zyon.greyjoy@isla.com',
                telefono: '675174',
                twitter: 'jonhnieve',
                facebook: 'AlfieAllen',
                avatar: ''
            })
        ];
    }
}