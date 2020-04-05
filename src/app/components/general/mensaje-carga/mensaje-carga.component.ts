import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-carga',
  templateUrl: './mensaje-carga.component.html',
  styleUrls: ['./mensaje-carga.component.css']
})
export class MensajeCargaComponent implements OnInit {

  @Input() displayCarga = false;
  constructor() { }

  ngOnInit() {
  }

}
