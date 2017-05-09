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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var http_1 = require("@angular/http");
var observablesEjemplosComponent = (function () {
    function observablesEjemplosComponent() {
        this._miObservable$ = Observable_1.Observable.create(function (observador) {
            //con el observador puedo emitir valores, errores o indicar que he terminado
            console.log('voy a emitir');
            observador.next('Buenos dias!!');
            // observador.next(true);
            // observador.next(12345);
            //emitimos un error
            // observador.error('Se ha roto la cosa')
            //al emitir el error no se vuelve a ejecutar el observable.
            //emitimos evento completado
            observador.complete();
        });
        this._miObservable$.subscribe(function (dato) {
            //se puede seguir llamando al observalbe para que siga emitiendo continuamente
            console.log("DATO RECIBIDO DESDE EL OBSERVABLE (NEXT) " + dato);
        }, function (error) {
            console.log("dato de error (NEXT) " + error);
            console.error("dato de error (NEXT) " + error);
        }, function () {
            console.log("He terminado");
        });
    }
    return observablesEjemplosComponent;
}());
observablesEjemplosComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ejemplos-observables',
        template: '!!' //./observables-ejemplos.component.html'
    }),
    __metadata("design:paramtypes", [])
], observablesEjemplosComponent);
exports.observablesEjemplosComponent = observablesEjemplosComponent;
//ejemplo de observables con operadores
var EjemploObservablesWikipeiaComponennt = (function () {
    //injectamos jsonp
    function EjemploObservablesWikipeiaComponennt(_jsonp) {
        var _this = this;
        this._jsonp = _jsonp;
        this._flujoDeDatosCajaTexto = new Subject_1.Subject();
        this.subscripcionCajaTexto =
            this._flujoDeDatosCajaTexto
                .debounceTime(500)
                .distinctUntilChanged()
                .switchMap(function (palabra) {
                console.log('voy a buscar: ', palabra);
                return _this.peticionBusqueda(palabra);
            })
                .subscribe(function (resultados) {
                _this.resultados = resultados;
            });
    }
    EjemploObservablesWikipeiaComponennt.prototype.buscarWikipedia = function (evento) {
        //hacemos emision de eventos
        console.log('evento', evento);
        //Vamos a tipificar el dato 
        var datoEmitir = evento.target.value;
        this._flujoDeDatosCajaTexto.next(datoEmitir);
    };
    EjemploObservablesWikipeiaComponennt.prototype.peticionBusqueda = function (palabra) {
        //busqueda a la wikipedia con jsonP
        var parametros = new http_1.URLSearchParams();
        parametros.set('search', palabra);
        parametros.set('action', 'opensearch');
        parametros.set('format', 'json');
        parametros.set('callback', 'JSONP_CALLBACK');
        var opciones = new http_1.RequestOptions();
        opciones.search = parametros;
        return this._jsonp
            .get('http://en.wikipedia.org/w/api.php', opciones)
            .map(function (respuesta) {
            console.info('ea', respuesta.json());
            return respuesta.json()[1];
        });
    };
    EjemploObservablesWikipeiaComponennt.prototype.ngOnDestroy = function () {
        //nos desuscribimos del observable
        this.subscripcionCajaTexto.unsubscribe();
    };
    return EjemploObservablesWikipeiaComponennt;
}());
EjemploObservablesWikipeiaComponennt = __decorate([
    core_1.Component({
        selector: 'ejemplos-observables-wikipedia',
        template: "\n        <div>\n        <input (input)=\"buscarWikipedia($event)\"/>\n            <ul>\n                <li *ngFor=\"let resultado of resultados\">\n                    {{resultado}}</li>\n            </ul>\n        </div>\n        "
    }),
    __metadata("design:paramtypes", [http_1.Jsonp])
], EjemploObservablesWikipeiaComponennt);
exports.EjemploObservablesWikipeiaComponennt = EjemploObservablesWikipeiaComponennt;
//# sourceMappingURL=observables-ejemplos.component.js.map