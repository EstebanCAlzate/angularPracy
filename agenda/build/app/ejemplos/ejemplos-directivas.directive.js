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
var EjemplosDirectivasAtributoDirective = (function () {
    //con renderer establecemos los atributos de elementos
    //en el cual esta situado la directiva
    //El elemento en cuestion lo obtenemos con
    //ElementRef.nativeElement
    function EjemplosDirectivasAtributoDirective(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    //activa este metodo cuando escucho ese evento sobre el host que sera donde este la etiqueta.
    EjemplosDirectivasAtributoDirective.prototype.ponerEstilo = function () {
        this.cambiarEstilo(true);
    };
    EjemplosDirectivasAtributoDirective.prototype.quitarEstilo = function () {
        this.cambiarEstilo(false);
    };
    EjemplosDirectivasAtributoDirective.prototype.cambiarEstilo = function (activo) {
        console.log('estoy cambiando estilo');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'font-weight', activo ? 'bold' : 'normal');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', activo ? 'red' : 'white');
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'colort', activo ? 'white' : 'black');
    };
    return EjemplosDirectivasAtributoDirective;
}());
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EjemplosDirectivasAtributoDirective.prototype, "ponerEstilo", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EjemplosDirectivasAtributoDirective.prototype, "quitarEstilo", null);
EjemplosDirectivasAtributoDirective = __decorate([
    core_1.Directive({
        selector: '[EjemploDirectivasAtributo]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.Renderer])
], EjemplosDirectivasAtributoDirective);
exports.EjemplosDirectivasAtributoDirective = EjemplosDirectivasAtributoDirective;
//# sourceMappingURL=ejemplos-directivas.directive.js.map