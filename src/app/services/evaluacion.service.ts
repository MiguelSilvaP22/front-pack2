import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Evaluacion } from '../models/evaluacion';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  
  public urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = environment.api;
   }

   getListaEvaluaciones() {
     return this.http.get<any>(this.urlApi + 'evaluacion');
   }

   guardarEvaluacion(evaluacion: Evaluacion) {
    return this.http.post(this.urlApi + 'evaluacion', evaluacion);
  }

  editarEvaluacion(evaluacion: Evaluacion) {
    return this.http.put(this.urlApi + 'evaluacion', evaluacion);
  }
  eliminarEvaluacion(Evaluacion) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: Evaluacion,
    };
    
     return this.http.delete(this.urlApi + 'evaluacion', options);
   }

  getNotasEvaluacion(id_curso, id_evaluacion) {
    return this.http.get<any>(this.urlApi + 'nota/' + id_curso + '/' + id_evaluacion);
  }

  gauradarNota(nota) {
    return this.http.post<any>(this.urlApi + 'nota/', nota);
  }
}
