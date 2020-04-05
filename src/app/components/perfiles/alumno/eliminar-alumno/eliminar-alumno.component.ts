import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { AlumnoService } from 'src/app/services/alumno.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-eliminar-alumno',
  templateUrl: './eliminar-alumno.component.html',
  styleUrls: ['./eliminar-alumno.component.scss']
})
export class EliminarAlumnoComponent implements OnInit {

  @Input() alumno = new Persona();
  public display = false;

  @Output() actualizar: EventEmitter<any> = new EventEmitter();

  constructor(private alumnoService: AlumnoService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  abrirModal(){
    this.display = true;
  }
  cerrarModal() {
    this.display = false;
  }

  eliminarAlumno() {
    this.alumnoService.eliminarAlumno(this.alumno).subscribe(
      data => {
        console.log(data);
        this.actualizar.emit();
        this.messageService.add({severity:'success', summary:'Realizado', detail:'Alumno eliminado correctamente.'});
      }
    )
  }
}
