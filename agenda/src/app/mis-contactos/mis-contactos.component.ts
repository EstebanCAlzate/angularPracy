import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactoService } from '../servicios/contactos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl:'./mis-contactos.component.html'
})
export class MisContactosComponent implements OnInit{
    //propiedades
    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

//en activateRoute tenemos la lista de contactos que hemos pedido
    constructor(private _contactosService: ContactoService, 
                private _activateRoute: ActivatedRoute) {  }

    ngOnInit(): void {
        //para sacar la lista mendiante peticion
        // this._contactosService.obtenerContactos()
        //     .subscribe(contactos => {
        //         this.listaContactos = contactos;
        //     });
        //recorremos lo que nos da la ruta con los contactos y los metemos en listacontactos
        this._activateRoute.data.forEach((data:{contactos: Contacto[]}) =>{
            this.listaContactos = data.contactos;
        });
    }

    mostrarDetalles(contacto: Contacto): void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string) {
        console.log('navegar ', ruta);
        window.open(ruta, '_blank');
    }
    eliminarContacto(contacto:Contacto){
        if(confirm(`¿Esta seguro que quieres eliminar a ${contacto.nombre}?`)){
         this._contactosService.eliminarContacto(contacto)
             .subscribe(()=>{
                 console.log('eliminado!!!');
                 //para evitar hacer otra peticion buscamos el contacto
                 // en la slita y lo quitamos
                 const indice:number = 
                     this.listaContactos.findIndex((c:Contacto)=>c.id===contacto.id);
                if(indice!==-1){
                    //lo eliminamos de la lista
                    this.listaContactos.splice(indice,1);
                    //lo quito de seleccionado
                    this.contactoSeleccionado = null;
                }
             });
        }
    }
}