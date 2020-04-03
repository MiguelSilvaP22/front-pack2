import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


/** @description variable de titulo */
public titulo_superior = 'Sistema PACK-2';

/** @description variable de subtitulo */
public subTitulo_superior = 'PACK-2';

  constructor() { }

  ngOnInit(): void {
  }

  hamburguerClick() {
    const element = document.querySelector('.leftMenu');
    element.classList.toggle('openMenu');
  
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
  
    const tituloMenu = document.querySelector('.tittleNavbar');
    tituloMenu.classList.toggle('open');
  
    const tittleLeftMenu = document.querySelector('.tittleLeftMenu');
    tittleLeftMenu.classList.toggle('open');
  
    const closeAccordion = document.getElementsByClassName('dropdown');
  
    for (let i = 0; i < closeAccordion.length; i++) {
      closeAccordion[i].classList.remove('active');
    }
  }
}
