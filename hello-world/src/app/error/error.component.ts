import {Component} from '@angular/core';

@Component({
    selector:'error',
    templateUrl:'./error.component.html'
})

export class ErrorComponent {
    public message:String ='Recurso no encontrado';
}