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
var contactos_service_1 = require("../servicios/contactos.service");
var router_1 = require("@angular/router");
var NuevoContactoComponent = (function () {
    //con esto ya podemos acceder a los servicios
    function NuevoContactoComponent(_contactosService, _router) {
        this._contactosService = _contactosService;
        this._router = _router;
    }
    NuevoContactoComponent.prototype.guardarContacto = function (contacto) {
        var _this = this;
        this._contactosService.guardarContacto(contacto)
            .subscribe(function (contacto) {
            //navegacion por codigo.
            _this._router.navigate(['mis-contactos']);
            // ese mis-contactos lo mira de routing
        });
    };
    return NuevoContactoComponent;
}());
NuevoContactoComponent = __decorate([
    core_1.Component({
        template: "<formulario-contacto (formularioAceptado)=\"guardarContacto($event)\" >\n                aceptado</formulario-contacto>"
    }),
    __metadata("design:paramtypes", [contactos_service_1.ContactoService,
        router_1.Router])
], NuevoContactoComponent);
exports.NuevoContactoComponent = NuevoContactoComponent;
//# sourceMappingURL=nuevo-contacto.component.js.map