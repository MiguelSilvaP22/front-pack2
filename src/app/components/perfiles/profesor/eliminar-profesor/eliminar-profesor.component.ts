import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { ProfesorService } from 'src/app/services/profesor.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-eliminar-profesor',
  templateUrl: './eliminar-profesor.component.html',
  styleUrls: ['./eliminar-profesor.component.scss']
})
export class EliminarProfesorComponent implements OnInit {


  @Input() profesor = new Persona();
  public display = false;

  @Output() actualizar: EventEmitter<any> = new EventEmitter();

  constructor(private profesorService: ProfesorService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  abrirModal(){
    console.log(this.profesor)

    this.display = true;
  }
  cerrarModal() {
    this.display = false;
  }

  eliminarProfesor() {
    this.profesorService.eliminarProfesor(this.profesor).subscribe(
      data => {
        console.log(data);
        this.actualizar.emit();
        this.messageService.add({severity:'success', summary:'Realizado', detail:'profesor eliminado correctamente.'});
      }
    )
  }

}
