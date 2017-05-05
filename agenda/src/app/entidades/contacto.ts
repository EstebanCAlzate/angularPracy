//representa un a entidad contacto

export class Contacto{
    
    // metodo estatico de la clase contacto
    static desdeJSON(json:any):Contacto{
        return new Contacto (
            json.id,
            json.nombre,
            json.apellidos,
            json.email,
            json.telefono,
            json.twitter,
            json.facebook,
            json.avatar
        );
    }

    constructor(
        public id: number,
        public nombre: string,
        public apellidos: string,
        public email: string,
        public telefono: string,
        public twitter:string,
        public facebook:string,
        public  avatar: string
    ){}

    // metodo de instancia (lo tiene todas las instancias de contacto)
    generarRutaFb():string{
        return this.facebook ? `https://facebook.com/${this.facebook}`: null;
    }
    generarRutaTw():string{
        return this.twitter ? `https://twitter.com/${this.facebook}`: null;
    }
}