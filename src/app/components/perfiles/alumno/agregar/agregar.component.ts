import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  public display = false;
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
    this.alumno = new Persona();
    this.displayCarga = false;
    this.onSubmmit = false;
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

      this.alumnoService.guardarAlumno(this.alumno).subscribe(
        data => {
          this.actualizar.emit();
          this.iniciaraFormulario();
          this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Alumno agregado correctamente.' });
        }
      );
    }
  }

}
