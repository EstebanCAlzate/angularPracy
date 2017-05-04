"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.alumnos = 'Angular';
        /*n:number = 0; Ejemplo de utilziacion de binding
        constructor(){
          setInterval(()=>{
            this.alumnos = 'Angular '+this.n++;
          },1000);
        }*/
        //biding propiedades
        this.textAreaLineas = 7;
        //bindign de clases
        this.pintamosClase = true;
        this.numSuerte = 4;
        //bindign biridecional
        this.mensaje = 'cambiame';
    }
    //bindign de estilos 
    AppComponent.prototype.obtenerColor = function () {
        return 'green';
    };
    //bindig de stilo con ng, las propiedas sin guiones   
    AppComponent.prototype.obtenerStilos = function () {
        return {
            backgroundColor: 'red',
            color: 'white'
        };
    };
    //binding de eventos: son los eventos nativos de html
    AppComponent.prototype.mostrar = function () {
        alert('Hola señores');
    };
    AppComponent.prototype.escribeMensaje = function (mensaje) {
        console.log(mensaje);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styles: ["\n          .caja {\n            width: 50px;\n            height: 50px;\n            background-color: red;\n          }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map