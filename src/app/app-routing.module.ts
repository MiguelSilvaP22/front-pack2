import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoComponent } from './components/perfiles/alumno/alumno.component';


const routes: Routes = [
  {path: 'alumnos', component: AlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
