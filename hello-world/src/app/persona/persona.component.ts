import {Component} from '@angular/core';
import {Route, ActivatedRoute,Params, Router} from '@angular/router';

@Component({
    selector:'persona',
    templateUrl:'./persona.component.html'
})

export class PersonaComponent{
    public nombre :String;
    public edad : Number;
    public mayorDeEdad:Boolean;
    public idPersona:Number;

    constructor(private _route:ActivatedRoute, private _router:Router){
        this.nombre='Jael Alexander Rivera Oviedo';
        this.edad =24;
        this.mayorDeEdad=true;
    }

    ngOnInit(){
        console.log("after that consturcotr");
        this.cambiarnombre();

        this._route.params.forEach((params:Params)=>{
            this.idPersona=params["idPersona"];
        });
    }
    cambiarnombre(){
        this.nombre='Pablo perez';
        alert(this.nombre);
    }

    redirige(){
        this._router.navigate(['/persona',30]);
    }
}