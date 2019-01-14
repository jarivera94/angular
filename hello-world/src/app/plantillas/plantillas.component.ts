    import {Component} from '@angular/core';

@Component({
    selector:'plantillas',
    templateUrl:'./plantillas.component.html',
})

export class PlantillasComponent{

    private titulo:string;
    private administrador:boolean;

    constructor(){
        this.titulo="Plantillas ngTemplate en Angular";
        this.administrador=true;
    }

    cambia(){
        if(this.administrador==true) this.administrador=false;
        else this.administrador=true;
    }
}