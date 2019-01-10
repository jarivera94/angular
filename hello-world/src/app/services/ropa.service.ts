import {Injectable} from '@angular/core';


@Injectable()

export class RopaService {

    public prendaRopa:String="Ropa de vaquero";
    public listadoRopa:Array<string>=["CAmisa blanca", "Chaqueta Azul"];

    prueba(){
        return this.prendaRopa;
    }

    setRopa(prenda:string):Array<string>{
        this.listadoRopa.push(prenda);
        return this.listadoRopa;
    }

    deleteRopa(index:number):Array<string>{
        this.listadoRopa.splice(index,1);
        return this.listadoRopa;
    }
    
    getListadoRopa():Array<string>{
        return this.listadoRopa;
    }
}