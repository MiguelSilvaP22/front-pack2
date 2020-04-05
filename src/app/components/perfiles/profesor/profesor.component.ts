import { Component, OnInit } from '@angular/core';
import { ProfesorService  } from 'src/app/services/profesor.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {

  public profesores: Persona[];
  public profesores_original: Persona[];
  constructor(private profesoService: ProfesorService) { }

  ngOnInit(): void {
    this.cargarListaProfesores();
  }


  cargarListaProfesores() {
    this.profesoService.getListaProfesores().subscribe(
      respuesta => {
        console.log(respuesta);
        this.profesores = respuesta.result;
        this.profesores_original = respuesta.result;
      }
    );
  }

  filtroProfesors(event) {

    const resultado = this.profesores_original.filter(
      profeso =>
        (profeso.nombres.indexOf(event.toUpperCase()) === 0) || 
          (profeso.apellido_mat.toUpperCase().indexOf(event.toUpperCase()) === 0) || 
          (profeso.apellido_pat.toUpperCase().indexOf(event.toUpperCase()) === 0) || 
          (profeso.rut.toUpperCase().indexOf(event.toUpperCase()) === 0) 
    );
    this.profesores = resultado;
  }



}
