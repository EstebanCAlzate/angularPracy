"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var contacto_1 = require("../entidades/contacto");
var ContactoService = (function () {
    function ContactoService() {
    }
    // hacemos un array de llamadas al metodo de crear contactos
    ContactoService.prototype.ObtenerContactos = function () {
        return [
            contacto_1.Contacto.desdeJSON({
                id: 1,
                nombre: 'Jonh ',
                apellidos: 'nieve',
                email: 'jonh.nieve@invernalia.com',
                telefono: '6756164',
                twitter: 'jonhnieve',
                facebook: 'JonhSnow',
                avatar: ''
            }),
            contacto_1.Contacto.desdeJSON({
                id: 2,
                nombre: 'Tyrion',
                apellidos: 'lanister',
                email: 'tyrion.lanister@roca.com',
                telefono: '64844254',
                twitter: 'jonhnieve',
                facebook: 'TyrionLannister',
                avatar: ''
            }),
            contacto_1.Contacto.desdeJSON({
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
    };
    return ContactoService;
}());
ContactoService = __decorate([
    core_1.Injectable()
], ContactoService);
exports.ContactoService = ContactoService;
//# sourceMappingURL=contactos.service.js.map