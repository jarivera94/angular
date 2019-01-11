import {Component} from '@angular/core';
import {Coche} from './coche';
import {PeticionesServices} from '../services/peticiones.services';
@Component({
    selector:'coches',
    templateUrl:'./coches.component.html',
    providers:[PeticionesServices]
})

export class CochesCompoent{

    private coche: Coche;
    private listCoches :Array<Coche>;
    private articulos;
    constructor(private _peticionesService:PeticionesServices){
        this.coche= new Coche(null,null,null);
        this.listCoches=[
            new Coche("panda","10","Wolsvagen"),
            new Coche("panda1","11","Wolsvagen1"),
            new Coche("panda2","12","Wolsvagen2"),
        ]
    }

    ngOnInit(){
        console.log(this._peticionesService.getPrueba());

        this._peticionesService.getArticulos()
            .subscribe(
                result=>{
                    this.articulos=result;
                },
                error=>{
                    console.log(error);
                }
            );
    }

    onSubmit(){
        console.log(this.coche);
        this.listCoches.push(this.coche);
    }
}