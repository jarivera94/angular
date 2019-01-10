import {Component} from '@angular/core';
import {RopaService}  from '../services/ropa.service';
@Component({
    selector:'home',
    templateUrl:'home.component.html',
    providers:[RopaService]
})

export class HomeComponent{
    private tittle:String='Pagina Principal';
    private listadoRopa: Array<string>=[];
    private prendaACtual:string;
    constructor(private _ropaService:RopaService){}

    ngOnInit(){
        console.log(this._ropaService.prueba());
        this.listadoRopa = this._ropaService.getListadoRopa();
        console.log(this.listadoRopa);
        console.log(this.prendaACtual)
    }

    addPrenda(){
        console.log(this.prendaACtual);
        this._ropaService.setRopa(this.prendaACtual);
    }

    removePrenda(index:number){
        this._ropaService.deleteRopa(index);
    }
}