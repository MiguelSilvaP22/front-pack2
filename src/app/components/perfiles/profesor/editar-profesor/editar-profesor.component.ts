import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Persona } from 'src/app/models/persona';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.scss']
})
export class EditarProfesorComponent implements OnInit {


  public display = false;
  @Input() profesor_input: Persona;
  public profesor = new Persona();
  public displayCarga = false;
  public onSubmmit = false;

  @Output() actualizar: EventEmitter<any> = new EventEmitter();


  constructor(private profesorService: ProfesorService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    console.log(this.profesor_input)
  }

  iniciaraFormulario() {
    this.display = false;
    this.displayCarga = false;
    this.onSubmmit = false;
    this.profesor = new Persona();
  }

  abrirModal() {
    this.profesor = Object.assign({}, this.profesor_input);
    this.display = true;
  }

  validGeneral() {
    if (this.profesor.rut != null && this.profesor.nombres != null
      && this.profesor.apellido_pat != null && this.profesor.apellido_mat != null) {
      if (this.profesor.rut.length > 0 && this.profesor.nombres.length > 0
        && this.profesor.apellido_pat.length > 0 && this.profesor.apellido_mat.length > 0) {
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

      // ROL profesor
      this.profesor.id_rol = 1;

      this.profesorService.editarProfesor(this.profesor).subscribe(
        data => {
          this.actualizar.emit();
          this.iniciaraFormulario();
          this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'profesor editado correctamente.' });
        }
      );
    }
  }

}
