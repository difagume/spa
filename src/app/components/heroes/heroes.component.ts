import { Component, OnInit } from '@angular/core';

// Importación del servicio HeroesService
import { HeroesService, Heroe } from '../../servicios/heroes.service';
// para importar a la pagina
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  // Variable local para almacenar toda la indo de los heroes
  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

}
