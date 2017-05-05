"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map"); // añade una funcion map a los observables
var contacto_1 = require("../entidades/contacto");
var ContactoService = (function () {
    function ContactoService(_http) {
        this._http = _http;
    }
    // private _contactos: Contacto[] =
    // [
    //     Contacto.desdeJSON({
    //         id: 1,
    //         nombre: 'Jonh ',
    //         apellidos: 'nieve',
    //         email: 'jonh.nieve@invernalia.com',
    //         telefono: '6756164',
    //         twitter: 'jonhnieve',
    //         facebook: 'JonhSnow',
    //         avatar: ''
    //     }),
    //     Contacto.desdeJSON({
    //         id: 2,
    //         nombre: 'Tyrion',
    //         apellidos: 'lanister',
    //         email: 'tyrion.lanister@roca.com',
    //         telefono: '64844254',
    //         twitter: 'jonhnieve',
    //         facebook: 'TyrionLannister',
    //         avatar: ''
    //     }),
    //     Contacto.desdeJSON({
    //         id: 3,
    //         nombre: 'Zyon',
    //         apellidos: 'grey',
    //         email: 'zyon.greyjoy@isla.com',
    //         telefono: '675174',
    //         twitter: 'jonhnieve',
    //         facebook: 'AlfieAllen',
    //         avatar: ''
    //     })
    // ];
    // hacemos un array de llamadas al metodo de crear contactos
    ContactoService.prototype.ObtenerContactos = function () {
        // return this._contactos;
        //lo cambiamos por una peticion http
        return this._http
            .get('http://localhost:3004/contactos')
            .map(function (res) {
            var lista = res.json();
            //este map es el de recorrer y hacer cosas con cada elemento
            //convertimos en una lista de contactos y la devolvemos
            return lista.map(function (elemento) {
                return contacto_1.Contacto.desdeJSON(elemento);
            });
        });
    };
    ContactoService.prototype.guardarContacto = function (contacto) {
        return this._http
            .post('http://localhost:3004/contactos', contacto)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    return ContactoService;
}());
ContactoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactoService);
exports.ContactoService = ContactoService;
//# sourceMappingURL=contactos.service.js.map