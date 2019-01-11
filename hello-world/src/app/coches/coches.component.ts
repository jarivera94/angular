import {Component} from '@angular/core';
import {Coche} from './coche';
@Component({
    selector:'coches',
    templateUrl:'./coches.component.html'
})

export class CochesCompoent{

    private coche: Coche;

    constructor(){
        this.coche= new Coche(null,null,null);
    }


    onSubmit(){
        console.log(this.coche);
    }
}