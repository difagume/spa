import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroe: Heroe[] = [];

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this.heroe = this._heroesService.buscarHeroe(termino);
    if (this.heroe.length > 0) {
      console.log(this.heroe[0].nombre);
    }else{
      console.log("No hay coincidencias con la busqueda :(");
    }
  }
}
