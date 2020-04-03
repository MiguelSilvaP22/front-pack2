import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  public display = false;
  public alumno = new Persona();
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
  }

  guardar(){
    // ROL ALUMNO
    this.alumno.id_rol = 2;

    this.alumnoService.guardarAlumno(this.alumno).subscribe(
      data => {
        console.log(data);
      }
    );


  }

}
