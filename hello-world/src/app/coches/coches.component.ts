import {Component} from '@angular/core';
import {Coche} from './coche';
@Component({
    selector:'coches',
    templateUrl:'./coches.component.html'
})

export class CochesCompoent{

    private coche: Coche;
    private listCoches :Array<Coche>;
    constructor(){
        this.coche= new Coche(null,null,null);
        this.listCoches=[
            new Coche("panda","10","Wolsvagen"),
            new Coche("panda1","11","Wolsvagen1"),
            new Coche("panda2","12","Wolsvagen2"),
        ]
    }


    onSubmit(){
        console.log(this.coche);
        this.listCoches.push(this.coche);
    }
}