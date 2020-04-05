import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Persona } from 'src/app/models/persona';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {

  public display = false;
  @Input() alumno_input: Persona;
  public alumno = new Persona();
  public displayCarga = false;
  public onSubmmit = false;

  @Output() actualizar: EventEmitter<any> = new EventEmitter();


  constructor(private alumnoService: AlumnoService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  iniciaraFormulario() {
    this.display = false;
    this.displayCarga = false;
    this.onSubmmit = false;
    this.alumno = new Persona();
  }

  abrirModal() {
    this.alumno = Object.assign({}, this.alumno_input);
    this.display = true;
  }

  validGeneral() {
    if (this.alumno.rut != null && this.alumno.nombres != null
      && this.alumno.apellido_pat != null && this.alumno.apellido_mat != null) {
      if (this.alumno.rut.length > 0 && this.alumno.nombres.length > 0
        && this.alumno.apellido_pat.length > 0 && this.alumno.apellido_mat.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
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

  guardar() {
    this.onSubmmit = true;

    if (this.validGeneral()) {
      this.displayCarga = true;

      // ROL ALUMNO
      this.alumno.id_rol = 2;

      this.alumnoService.editarAlumno(this.alumno).subscribe(
        data => {
          this.actualizar.emit();
          this.iniciaraFormulario();
          this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Alumno editado correctamente.' });
        }
      );
    }
  }

}
