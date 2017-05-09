import {Pipe, PipeTransform} from '@angular/core'
import { Contacto } from '../entidades/contacto';

//implemetar una pipe
@Pipe({name:'ordenar'}) 
    export class OrdenarPipe implements PipeTransform {
        //con transform ceamos un nuevo dato y lo retornamos
        //no alteramos el original
        transform (contactos: Contacto[]){
            contactos.sort((contacto1,contacto2):number =>{
                const nombreCompleto1 = `${contacto1.nombre} ${contacto2.apellidos}`;
                const nombreCompleto2 = `${contacto2.nombre} ${contacto2.apellidos}`;

                //si el primero es mayor que el segundo devolvemos 1
                if (nombreCompleto1 > nombreCompleto2) return 1;
                //si el primero es mayor que el segundo devolvemos -1
                if (nombreCompleto1 < nombreCompleto2) return -1;
                //si el primero es mayor que el segundo devolvemos 1
                return 0;
            })
            return contactos;
        }
    }