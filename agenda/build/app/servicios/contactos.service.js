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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map"); // añade una funcion map a los observables
var contacto_1 = require("../entidades/contacto");
var direcciones_1 = require("../configuracion/direcciones");
var ContactoService = (function () {
    function ContactoService(_http, _direcciones) {
        this._http = _http;
        this._direcciones = _direcciones;
    }
    // hacemos un array de llamadas al metodo de crear contactos
    ContactoService.prototype.obtenerContactos = function () {
        // return this._contactos;
        //lo cambiamos por una peticion http
        return this._http
            .get(this._direcciones.servidor + "/contactos")
            .map(function (res) {
            var lista = res.json();
            //este map es el de recorrer y hacer cosas con cada elemento
            //convertimos en una lista de contactos y la devolvemos
            return lista.map(function (elemento) {
                return contacto_1.Contacto.desdeJSON(elemento);
            });
        });
    };
    //creamos un contacto en el servidor.
    ContactoService.prototype.guardarContacto = function (contacto) {
        return this._http
            .post(this._direcciones.servidor + "/contactos", contacto)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    //eliminamos un contacto del servidor
    // eliminarContacto(contacto: Contacto): Observable<Contacto> { cambio en el eliminar
    ContactoService.prototype.eliminarContacto = function (contacto) {
        return this._http
            .delete(this._direcciones.servidor + "/contactos/" + contacto.id);
        // .map(res => Contacto.desdeJSON(res.json()));
        //lo que responda el servidor lo convertimos en tipo contacto
    };
    //actualizamos un contacto en el servidor
    ContactoService.prototype.editarContacto = function (contacto) {
        return this._http
            .put(this._direcciones.servidor + "/contactos/" + contacto.id, contacto)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    ContactoService.prototype.generarRutaAvatar = function () {
        return this._http
            .get(this._direcciones.faker)
            .map(function (res) {
            var rutaAvatar = res.text(); // quitamos las comillas del string
            rutaAvatar = rutaAvatar.replace(new RegExp('\"', 'g'), '');
            return rutaAvatar;
        });
    };
    return ContactoService;
}());
ContactoService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(direcciones_1.Direcciones)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], ContactoService);
exports.ContactoService = ContactoService;
//# sourceMappingURL=contactos.service.js.map