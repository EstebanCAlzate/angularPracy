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
var contacto_1 = require("../entidades/contacto");
var contactos_service_1 = require("../servicios/contactos.service");
var FormularioContactComponent = (function () {
    function FormularioContactComponent(_contactosService) {
        this._contactosService = _contactosService;
        this.formularioAceptado = new core_1.EventEmitter();
        this.rutaAvatar = '';
    }
    FormularioContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._contactosService.generarRutaAvatar()
            .subscribe(function (ruta) {
            _this.rutaAvatar = ruta;
        });
    };
    FormularioContactComponent.prototype.guardarContacto = function (contactoForm) {
        console.log(contactoForm);
        var contacto = contacto_1.Contacto.desdeJSON(contactoForm.value);
        contacto.avatar = this.rutaAvatar;
        this.formularioAceptado.emit(contacto);
    };
    return FormularioContactComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FormularioContactComponent.prototype, "formularioAceptado", void 0);
FormularioContactComponent = __decorate([
    core_1.Component({
        selector: 'formulario-contacto',
        templateUrl: './formulario-contacto.component.html',
        styleUrls: ['./formulario-contacto.component.css']
    }),
    __metadata("design:paramtypes", [contactos_service_1.ContactoService])
], FormularioContactComponent);
exports.FormularioContactComponent = FormularioContactComponent;
//# sourceMappingURL=formulario-contacto.component.js.map