import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
 
  public urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = environment.api;
   }

   getListaCursos() {
     return this.http.get<any>(this.urlApi + 'curso');
   }

   guardarCurso(alumno: Curso) {
    return this.http.post(this.urlApi + 'curso', alumno);
  }
   editarCurso(alumno: Curso) {
    return this.http.put(this.urlApi + 'curso', alumno);
  }

  eliminarAlumno(curso: Curso) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: curso,
    };
    
     return this.http.delete(this.urlApi + 'curso', options);
   }

   obtenerALumnosCurso(id_curso) {
    return this.http.get<any>(this.urlApi + 'alumnos_de_curso/' + id_curso);
   }

   regitrarAlumno(registro) {
    return this.http.post(this.urlApi + 'alumno_curso', registro);
   }
   
   eliminarAlumnoCurso(registro) {
     console.log(registro)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: registro,
    };
    
    return this.http.delete(this.urlApi + 'alumno_curso', options);
   }
  
}
