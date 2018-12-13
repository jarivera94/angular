import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import {PersonaComponent} from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,FrutaComponent,EmpleadoComponent
    ,PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
