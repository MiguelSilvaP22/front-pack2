import { Component, OnInit, Input } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { AlumnoCurso } from 'src/app/models/alumno-curso';
import { Persona } from 'src/app/models/persona';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registrar-alumnos',
  templateUrl: './registrar-alumnos.component.html',
  styleUrls: ['./registrar-alumnos.component.scss']
})
export class RegistrarAlumnosComponent implements OnInit {

  public display = false;
  @Input() curso = new Curso();

  public listaAlumnosCurso = [];
  constructor(private cursoService: CursoService,
            private messageService: MessageService) { }

  ngOnInit(): void {
  }

  abrirModal(){
    this.display = true;
    this.cargarALumnos();
  }

  cargarALumnos() {
    this.cursoService.obtenerALumnosCurso(this.curso.id_curso).subscribe(
      data  =>  {
        console.log(data)
        this.listaAlumnosCurso = data.result.alumnos
        console.log(this.listaAlumnosCurso);
      }
    )
  }

  clickRegistro(alumno) {
    const registro = new AlumnoCurso();
    registro.id_curso = this.curso.id_curso;
    registro.id_alumno = alumno.id_persona;
    console.log(registro);
    if(alumno.pertenese_curso){
      this.registrarAlumnoCurso(registro);
    } else {
      this.eliminarAlumnoCurso(registro);
    }
  }

  registrarAlumnoCurso(registro: AlumnoCurso) {
    this.cursoService.regitrarAlumno(registro).subscribe(
      data => 
      {
      this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Alumno Registrado al curso correctamente.' });
    }
      )
  }
  eliminarAlumnoCurso(registro: AlumnoCurso) {
    this.cursoService.eliminarAlumnoCurso(registro).subscribe(
      data => 
      { 
      this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Alumno Eliminado del curso correctamente.' });
    }
    )
  }

}
