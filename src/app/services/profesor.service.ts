import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  public urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = environment.api;
   }

   getListaProfesores() {
     return this.http.get<any>(this.urlApi + 'persona/1');
   }

   guardarProfesor(profesor: Persona) {
    return this.http.post(this.urlApi + 'persona', profesor);
  }

  editarProfesor(profesor: Persona) {
    return this.http.put(this.urlApi + 'persona', profesor);
  }

   getDetalleProfesor(id_alumno: number) {
     return this.http.get<any>(this.urlApi + 'detalle_alumno/' + id_alumno);
   }

   eliminarProfesor(profesor: Persona) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: profesor,
    };
    
     return this.http.delete(this.urlApi + 'persona', options);
   }

}
