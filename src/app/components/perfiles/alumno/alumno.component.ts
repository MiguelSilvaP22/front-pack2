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
  public alumnos_original: Persona[];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarListaAlumnos();
  }


  cargarListaAlumnos() {
    this.alumnoService.getListaAlumnos().subscribe(
      respuesta => {
        console.log(respuesta);
        this.alumnos = respuesta.result;
        this.alumnos_original = respuesta.result;
      }
    );
  }

  filtroAlumnos(event) {

    const resultado = this.alumnos_original.filter(
      alumno =>
        (alumno.nombres.indexOf(event.toUpperCase()) === 0) || 
          (alumno.apellido_mat.toUpperCase().indexOf(event.toUpperCase()) === 0) || 
          (alumno.apellido_pat.toUpperCase().indexOf(event.toUpperCase()) === 0) || 
          (alumno.rut.toUpperCase().indexOf(event.toUpperCase()) === 0) 
    );
    this.alumnos = resultado;
  }


}
