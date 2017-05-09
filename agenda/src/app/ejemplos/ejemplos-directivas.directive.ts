import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive ({
    selector: '[EjemploDirectivasAtributo]'
})
    export class EjemplosDirectivasAtributoDirective{
        //con renderer establecemos los atributos de elementos
        //en el cual esta situado la directiva
        //El elemento en cuestion lo obtenemos con
        //ElementRef.nativeElement
        constructor (
            private _elementRef: ElementRef,
            private _renderer: Renderer
        ){}

//activa este metodo cuando escucho ese evento sobre el host que sera donde este la etiqueta.
        @HostListener ('mouseenter')
        ponerEstilo(){
            this.cambiarEstilo(true);
        }

        @HostListener ('mouseleave')
        quitarEstilo(){
            this.cambiarEstilo(false);
        }

        cambiarEstilo(activo: boolean){
            console.log('estoy cambiando estilo');
            this._renderer.setElementStyle( this._elementRef.nativeElement,
            'font-weight', activo?'bold':'normal');
            
            this._renderer.setElementStyle( this._elementRef.nativeElement,
            'background-color', activo?'red':'white');

            this._renderer.setElementStyle( this._elementRef.nativeElement,
            'colort', activo?'white':'black');
        }
    }