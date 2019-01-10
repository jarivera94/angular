import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar routing
import {routing,appRoutingProvides} from './app.routing'

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import {PersonaComponent} from './persona/persona.component';
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component'

import {ConversorPipe} from './pipe/conversor.pipe';
@NgModule({
  declarations: [
    AppComponent,FrutaComponent,EmpleadoComponent
    ,PersonaComponent,ErrorComponent,HomeComponent,ContactoComponent,ConversorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing // routing
  ],
  providers: [appRoutingProvides],
  bootstrap: [AppComponent]
})
export class AppModule { }
