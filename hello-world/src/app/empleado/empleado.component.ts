import {Component} from '@angular/core';
import {Empleado} from './empleado';
@Component({
    selector:'empleado',
    templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent{
    
    public empleado:Empleado;
    public listEmpleados:Array<Empleado>;
    public muestraPrimero : Boolean;
    public colorSwitch:String;
    public colorSeleccionado:String;
    ngOnInit(){

        this.empleado = new Empleado('Jael Alexander Rivera Oviedo',20);
        this.listEmpleados =[new Empleado('Jael Alexander Rivera Oviedo 1',21),
        new Empleado('Jael Alexander Rivera Oviedo 2',22),
        new Empleado('Jael Alexander Rivera Oviedo 3',23),
        new Empleado('Jael Alexander Rivera Oviedo 4',24)];
        this.muestraPrimero=false;
        this.colorSwitch="red";
        this.colorSeleccionado="blue";
        console.log(this.listEmpleados);
    }

    cambiarVistaEmpleado(valor:Boolean){
        this.muestraPrimero=valor;
    }
    imprimeBoton(){
        console.log(this.colorSeleccionado);
    }
}