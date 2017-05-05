"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FormularioContactComponent = (function () {
    function FormularioContactComponent() {
    }
    FormularioContactComponent.prototype.guardarContacto = function (contactoForm) {
        console.log(contactoForm);
    };
    return FormularioContactComponent;
}());
FormularioContactComponent = __decorate([
    core_1.Component({
        selector: 'formulario-contacto',
        templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
        styles: ["\n        button:disabled {\n            background-color: #EE82EE;\n            border: 1px solid purple;\n        }\n        input:focus{\n            border: 1px solid #EE82EE;\n        }\n    "]
    })
], FormularioContactComponent);
exports.FormularioContactComponent = FormularioContactComponent;
//# sourceMappingURL=formulario-contacto.component.js.map