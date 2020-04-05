import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  public urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = environment.api;
   }

   getListaAlumnos() {
     return this.http.get<any>(this.urlApi + 'persona/2');
   }

   getDetalleAlumno(id_alumno: number) {
     return this.http.get<any>(this.urlApi + 'detalle_alumno/' + id_alumno);
   }

   guardarAlumno(alumno: Persona) {
     return this.http.post(this.urlApi + 'persona', alumno);
   }
   editarAlumno(alumno: Persona) {
     return this.http.put(this.urlApi + 'persona', alumno);
   }

   eliminarAlumno(alumno: Persona) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: alumno,
    };
    
     return this.http.delete(this.urlApi + 'persona', options);
   }
}
