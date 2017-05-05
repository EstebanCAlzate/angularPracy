//representa un a entidad contacto
"use strict";
var Contacto = (function () {
    function Contacto(id, nombre, apellidos, email, telefono, twitter, facebook, avatar) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.twitter = twitter;
        this.facebook = facebook;
        this.avatar = avatar;
    }
    // metodo estatico de la clase contacto
    Contacto.desdeJSON = function (json) {
        return new Contacto(json.id, json.nombre, json.apellidos, json.email, json.telefono, json.twitter, json.facebook, json.avatar);
    };
    // metodo de instancia (lo tiene todas las instancias de contacto)
    Contacto.prototype.generarRutaFb = function () {
        return this.facebook ? "https://facebook.com/" + this.facebook : null;
    };
    Contacto.prototype.generarRutaTw = function () {
        return this.twitter ? "https://twitter.com/" + this.facebook : null;
    };
    return Contacto;
}());
exports.Contacto = Contacto;
//# sourceMappingURL=contacto.js.map