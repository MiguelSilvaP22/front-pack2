import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/general/menu/menu.component';
import { AlumnoComponent } from './components/perfiles/alumno/alumno.component';


// Componentes PRIME-NG
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { DetalleComponent } from './components/perfiles/alumno/detalle/detalle.component';
import { AgregarComponent } from './components/perfiles/alumno/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlumnoComponent,
    DetalleComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
