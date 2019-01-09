//Importar modulos
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importarcion de modulos';
import {EmpleadoComponent} from './empleado/empleado.component'
import {FrutaComponent} from './fruta/fruta.component';
import {ErrorComponent} from './error/error.component';
import {PersonaComponent} from './persona/persona.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
const appRoutes:Routes=[
    {path:'', component:HomeComponent},//default
    {path:'home', component:HomeComponent},
    {path:'empleado', component:EmpleadoComponent}, //ruta empleado existente
    {path:'fruta', component:FrutaComponent}, // ruta de la fruta existente
    {path:'persona', component:PersonaComponent},
    {path:'persona/:idPersona',component:PersonaComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'**', component:ErrorComponent}, // ** define si la ruta falla enviarlo al mensaje de error
    
];

export const appRoutingProvides : any[]=[];

export const routing :ModuleWithProviders=RouterModule.forRoot(appRoutes);