import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { Evaluacion } from 'src/app/models/evaluacion';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {

  public listaEvaluaciones: Evaluacion[];

  constructor(private evaluacionService: EvaluacionService) { }

  ngOnInit(): void {
    this.cargarListaEvaluaciones();
  }

  cargarListaEvaluaciones() {
    this.evaluacionService.getListaEvaluaciones().subscribe(
      respuesta => {
        this.listaEvaluaciones = respuesta.result;  
        console.log(this.listaEvaluaciones);
      }
    );
  }

}
