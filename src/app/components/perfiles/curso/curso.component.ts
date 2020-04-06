import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  public cursos: Curso[];
  public cursos_original: Curso[];
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cargarListaCursos();
  }


  cargarListaCursos() {
    this.cursoService.getListaCursos().subscribe(
      respuesta => {
        this.cursos = respuesta.result;
        this.cursos_original = respuesta.result;
      }
    );
  }
}
