import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoComponent } from './components/perfiles/alumno/alumno.component';
import { CursoComponent } from './components/perfiles/curso/curso.component';
import { ProfesorComponent } from './components/perfiles/profesor/profesor.component';


const routes: Routes = [
  {path: 'alumnos', component: AlumnoComponent},
  {path: 'cursos', component: CursoComponent},
  {path: 'profesores', component: ProfesorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
