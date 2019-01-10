import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'conversor'})

export class ConversorPipe implements PipeTransform{
    transform(value:string, por:string){
        let valueOne = parseInt(value);
        let valueTwo = parseInt(por);

        return "El resultado de la multiplicacion de  " + valueOne +" * " +valueTwo +" es = "+(valueOne*valueTwo);
    }   
}