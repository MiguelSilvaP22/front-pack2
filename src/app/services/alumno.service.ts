import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
     return this.http.get<any>(this.urlApi + 'persona');
   }

   getDetalleAlumno(id_alumno: number) {
     return this.http.get<any>(this.urlApi + 'detalle_alumno/' + id_alumno);
   }

   guardarAlumno(alumno: Persona) {
     return this.http.post(this.urlApi + 'persona', alumno);
   }
}
