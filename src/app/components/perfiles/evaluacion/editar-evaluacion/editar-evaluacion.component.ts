import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Evaluacion } from 'src/app/models/evaluacion';
import { CursoService } from 'src/app/services/curso.service';
import { MessageService } from 'primeng/api';
import { EvaluacionService } from 'src/app/services/evaluacion.service';

@Component({
  selector: 'app-editar-evaluacion',
  templateUrl: './editar-evaluacion.component.html',
  styleUrls: ['./editar-evaluacion.component.scss']
})
export class EditarEvaluacionComponent implements OnInit {

  public display = false;
  public evaluacion = new Evaluacion();
  @Input() evaluacion_input: Evaluacion;
  public displayCarga = false;
  public onSubmmit = false;
  public es: any;
  public listaCursos: Curso[];

  @Output() actualizar: EventEmitter<any> = new EventEmitter();

  constructor(private cursoService: CursoService,
    private messageService: MessageService,
    private evaluacionService: EvaluacionService) { }

  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
    
  }

  iniciaraFormulario() {
    this.display = false;
    this.evaluacion = new Evaluacion();
    this.displayCarga = false;
    this.onSubmmit = false;
  }

  abrirModal() {
    this.evaluacion = Object.assign({}, this.evaluacion_input);
    this.evaluacion.fecha_evaluacion = new Date(this.evaluacion.fecha_evaluacion);
    this.display = true;
    console.log('EVALUACION: ',this.evaluacion.curso)
    this.cargarCursos();

  }

  cargarCursos() {
    this.cursoService.getListaCursos().subscribe(
      data => {
        this.listaCursos = data.result;
        this.listaCursos.forEach(element => {
          delete element.profesor;
        });
      }
    )
  }


  validError(variable) {

    if (this.onSubmmit) {
      if (variable === null || variable === '') {
        return true;
      } else {
        return false;
      }
    } else {
      return false
    }
  }


  validGeneral() {
    if (this.evaluacion.descripcion != null && this.evaluacion.fecha_evaluacion != null
      && this.evaluacion.curso != null) {
      if (this.evaluacion.descripcion !== '') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }

  }


  guardar() {

    this.onSubmmit = true;
    if (this.validGeneral()) {
      console.log(this.evaluacion);
      this.evaluacion.id_curso = this.evaluacion.curso.id_curso;

      this.evaluacionService.editarEvaluacion(this.evaluacion).subscribe(
        data => {
          this.actualizar.emit();
          this.iniciaraFormulario();
          this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Evaluación agregado correctamente.' });
        }
      )

    }
  }

}
