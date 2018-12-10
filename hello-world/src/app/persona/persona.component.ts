import {Component} from '@angular/core';

@Component({
    selector:'persona',
    templateUrl:'./persona.component.html'
})

export class PersonaComponent{
    public nombre :String;
    public edad : Number;
    public mayorDeEdad:Boolean;


    constructor(){
        this.nombre='Jael Alexander Rivera Oviedo';
        this.edad =24;
        this.mayorDeEdad=true;
    }

    ngOnInit(){
        console.log("after that consturcotr");
        this.cambiarnombre();
    }
    cambiarnombre(){
        this.nombre='Pablo perez';
        alert(this.nombre);
    }
}