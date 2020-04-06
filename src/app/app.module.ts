import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// Componentes PRIME-NG
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/general/menu/menu.component';
import { MensajeCargaComponent } from './components/general/mensaje-carga/mensaje-carga.component';
import { AlumnoComponent } from './components/perfiles/alumno/alumno.component';
import { DetalleComponent } from './components/perfiles/alumno/detalle/detalle.component';
import { AgregarComponent } from './components/perfiles/alumno/agregar/agregar.component';
import { EliminarAlumnoComponent } from './components/perfiles/alumno/eliminar-alumno/eliminar-alumno.component';
import { EditarAlumnoComponent } from './components/perfiles/alumno/editar-alumno/editar-alumno.component';
import { CursoComponent } from './components/perfiles/curso/curso.component';
import { AgregarCursoComponent } from './components/perfiles/curso/agregar-curso/agregar-curso.component';
import { EliminarCursoComponent } from './components/perfiles/curso/eliminar-curso/eliminar-curso.component';
import { EditarCursoComponent } from './components/perfiles/curso/editar-curso/editar-curso.component';
import { ProfesorComponent } from './components/perfiles/profesor/profesor.component';
import { AgregarProfesorComponent } from './components/perfiles/profesor/agregar-profesor/agregar-profesor.component';
import { EditarProfesorComponent } from './components/perfiles/profesor/editar-profesor/editar-profesor.component';
import { DetalleProfesorComponent } from './components/perfiles/profesor/detalle-profesor/detalle-profesor.component';
import { EliminarProfesorComponent } from './components/perfiles/profesor/eliminar-profesor/eliminar-profesor.component';
import { RegistrarAlumnosComponent } from './components/perfiles/curso/registrar-alumnos/registrar-alumnos.component';
import { EvaluacionComponent } from './components/perfiles/evaluacion/evaluacion.component';
import { CrearEvaluacionComponent } from './components/perfiles/evaluacion/crear-evaluacion/crear-evaluacion.component';
import { EditarEvaluacionComponent } from './components/perfiles/evaluacion/editar-evaluacion/editar-evaluacion.component';
import { EliminarEvaluacionComponent } from './components/perfiles/evaluacion/eliminar-evaluacion/eliminar-evaluacion.component';
import { VerEvaluacionComponent } from './components/perfiles/evaluacion/ver-evaluacion/ver-evaluacion.component';
import { EvaluarAlumnosComponent } from './components/perfiles/evaluacion/evaluar-alumnos/evaluar-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlumnoComponent,
    DetalleComponent,
    AgregarComponent,
    MensajeCargaComponent,
    EliminarAlumnoComponent,
    EditarAlumnoComponent,
    CursoComponent,
    AgregarCursoComponent,
    EliminarCursoComponent,
    EditarCursoComponent,
    ProfesorComponent,
    AgregarProfesorComponent,
    EditarProfesorComponent,
    DetalleProfesorComponent,
    EliminarProfesorComponent,
    RegistrarAlumnosComponent,
    EvaluacionComponent,
    CrearEvaluacionComponent,
    EditarEvaluacionComponent,
    EliminarEvaluacionComponent,
    VerEvaluacionComponent,
    EvaluarAlumnosComponent
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
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    ToastModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
