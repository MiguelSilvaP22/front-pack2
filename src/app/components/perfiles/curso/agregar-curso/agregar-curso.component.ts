import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { MessageService } from 'primeng/api';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.scss']
})
export class AgregarCursoComponent implements OnInit {

  public display = false;
  public curso = new Curso();
  public displayCarga = false;
  public onSubmmit = false;
  public es: any;
  public listaProfesores: Persona[];

  @Output() actualizar: EventEmitter<any> = new EventEmitter();

  constructor(private cursoService: CursoService,
    private messageService: MessageService,
    private profesorService: ProfesorService) { }

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
    this.cargarProfesores();
  }

  iniciaraFormulario() {
    this.display = false;
    this.curso = new Curso();
    this.displayCarga = false;
    this.onSubmmit = false;
  }

  cargarProfesores() {
    this.profesorService.getListaProfesores().subscribe(
      data => {
        this.listaProfesores = data.result
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
    if (this.curso.nombre_curso != null && this.curso.profesor != null
      && this.curso.fecha_inicio != null && this.curso.fecha_fin != null) {
      if (this.curso.nombre_curso !== '' ) {
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
      this.curso.id_profesor =this.curso.profesor.id_persona;
      
      this.cursoService.guardarCurso(this.curso).subscribe(
        data => {
          this.actualizar.emit();
          this.iniciaraFormulario();
          this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Curso agregado correctamente.' });
        
        }
      )
    }
  }
}
