//Importar modulos
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importarcion de modulos';
import {EmpleadoComponent} from './empleado/empleado.component'
import {FrutaComponent} from './fruta/fruta.component';
import {ErrorComponent} from './error/error.component';
import {PersonaComponent} from './persona/persona.component';
const appRoutes:Routes=[
    {path:'', component:EmpleadoComponent},//default
    {path:'empleado', component:EmpleadoComponent}, //ruta empleado existente
    {path:'fruta', component:FrutaComponent}, // ruta de la fruta existente
    {path:'persona', component:PersonaComponent},
    {path:'**', component:ErrorComponent}, // ** define si la ruta falla enviarlo al mensaje de error
    
];

export const appRoutingProvides : any[]=[];

export const routing :ModuleWithProviders=RouterModule.forRoot(appRoutes);