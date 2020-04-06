import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.scss']
})
export class EliminarCursoComponent implements OnInit {


  @Input() curso = new Curso();
  public display = false;

  @Output() actualizar: EventEmitter<any> = new EventEmitter();

  constructor(private cursoService: CursoService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  abrirModal() {
    this.display = true;
  }
  cerrarModal() {
    this.display = false;
  }

  eliminarCurso() {
    this.cursoService.eliminarAlumno(this.curso).subscribe(
      data => {
        console.log(data);
        this.actualizar.emit();
        this.messageService.add({ severity: 'success', summary: 'Realizado', detail: 'Curso eliminado correctamente.' });
      })

  }


}
