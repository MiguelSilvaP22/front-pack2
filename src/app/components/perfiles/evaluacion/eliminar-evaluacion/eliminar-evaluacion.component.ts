import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { MessageService } from 'primeng/api';
import { Evaluacion } from 'src/app/models/evaluacion';

@Component({
  selector: 'app-eliminar-evaluacion',
  templateUrl: './eliminar-evaluacion.component.html',
  styleUrls: ['./eliminar-evaluacion.component.scss']
})
export class EliminarEvaluacionComponent implements OnInit {



  @Input() evaluacion = new Evaluacion();
  public display = false;

  @Output() actualizar: EventEmitter<any> = new EventEmitter();

  constructor(private evalualuacionService: EvaluacionService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  abrirModal() {
    this.display = true;
  }
  cerrarModal() {
    this.display = false;
  }

  eliminarCurso() {
    console.log(this.evaluacion)
    this.evalualuacionService.eliminarEvaluacion(this.evaluacion).subscribe(
      data => {
        console.log(data);
        this.actualizar.emit();
        this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Evaluación eliminada correctamente.' });
      })

  }

}
