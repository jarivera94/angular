import {Injectable, Inject} from '@angular/core';
//run npm install angular-http
//run npm install rxjs-compat --save 

/**
 * Si en Angular 6 te genera algun fallo la libreria map, importala de esta manera en tu servicio:

    import {map} from 'rxjs/operators'; 

    Y usala de esta manera:

    .pipe(map(res => res.json())); 
 */
import {Http, Response,Headers} from '@angular/http';

import { map } from 'rxjs/operators';

import {Observable} from 'rxjs/Observable';

@Injectable()

export class PeticionesServices{

    private url:string;

    constructor(private _http:Http){
        this.url='https://jsonplaceholder.typicode.com/posts';
    }

    getPrueba(){
        return "Hola mundo desde el servicio";
    }

    getArticulos(){
        return this._http.get(this.url)
        .pipe(
            map(res => res.json()) // or any other operator
          )
    }
}