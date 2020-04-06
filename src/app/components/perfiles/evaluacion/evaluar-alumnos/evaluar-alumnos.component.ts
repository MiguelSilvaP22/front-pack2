import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evaluacion } from 'src/app/models/evaluacion';
import { MessageService } from 'primeng/api';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { Nota } from 'src/app/models/nota';

@Component({
  selector: 'app-evaluar-alumnos',
  templateUrl: './evaluar-alumnos.component.html',
  styleUrls: ['./evaluar-alumnos.component.scss']
})
export class EvaluarAlumnosComponent implements OnInit {


  @Input() evaluacion = new Evaluacion();
  public display = false;
  public listaAlumnosCurso = [];
  @Output() actualizar: EventEmitter<any> = new EventEmitter();

  constructor(private evalualuacionService: EvaluacionService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.cargarListaNotas();
  }

  cargarListaNotas() {
    this.evalualuacionService.getNotasEvaluacion(this.evaluacion.id_curso, this.evaluacion.id_evaluacion).subscribe(
      data => {
        if (data.result != null) {
          this.listaAlumnosCurso = data.result
          console.log('DATA', data)
        }

      }
    )
  }

  guardarNota(alumno){
    const nota = new Nota();
    nota.puntaje = alumno.puntaje;
    nota.id_evaluacion = this.evaluacion.id_evaluacion;
    nota.id_alumno = alumno.id_persona;
    console.log('nota', nota);

    this.evalualuacionService.gauradarNota(nota).subscribe(
      data => {
        console.log(data);
      }
    )
    
  }

  cambio(alumno){
    if(alumno.puntaje != null ){
      if (alumno.puntaje >= 10 && alumno.puntaje <= 70){
        this.guardarNota(alumno);
      } else {
        alumno.puntaje = null
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe ingresar una nota entre 10 a 70.' });

      }
    } 
  }

  abrirModal() {
    this.display = true;
  }
  cerrarModal() {
    this.display = false;
  }

  eliminarCurso() {
    console.log(this.evaluacion)
  }

}
