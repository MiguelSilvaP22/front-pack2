import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public display = false;
  @Input() alumno = new Persona();
  public detalle_alumno = new Persona();

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
  }

  abrirModal() {
    this.display = true;
    this.cargarDetalleAlumno(this.alumno.id_persona);
  }

  cargarDetalleAlumno(id_alumno: number) {
    this.alumnoService.getDetalleAlumno(id_alumno).subscribe(
      data => {
        this.detalle_alumno = data.result;
      }
    );
  }

}
