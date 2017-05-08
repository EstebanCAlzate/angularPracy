import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';

//definimos la coleccion de rutas de nuestra app
const rutas: Routes = [
    {
        path: 'mis-contactos',
        component: MisContactosComponent
    },
    {
        path: 'nuevo-contacto',
        component: NuevoContactoComponent
    },
    {
        path: '**',
        redirectTo: '/mis-contactos'
    }
];

//creamos un nuevo modulo de routing apartir de las rutas defininidas
const moduloConRutas = RouterModule.forRoot(rutas);

@NgModule({
    imports: [moduloConRutas],
    exports: [RouterModule]
})
export class AppRoutingModule {}