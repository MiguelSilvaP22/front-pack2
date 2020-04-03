import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  public alumnos: Persona[];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarListaAlumnos();
  }


  cargarListaAlumnos() {
    this.alumnoService.getListaAlumnos().subscribe(
      respuesta => {
        console.log(respuesta);
        this.alumnos = respuesta.result;
      }
    );
  }

}
