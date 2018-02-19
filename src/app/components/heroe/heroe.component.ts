import { Component } from '@angular/core';
//Para recibir parametros que vienen por el URL
import { ActivatedRoute } from '@angular/router';
//importo el Servicio
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {

    this.activatedRoute.params.subscribe(params => {
      //recibe el paremetro que pusimos en app.routes.ts
      //console.log(params['id']);
      this.heroe = this._heroesService.getHeroe( params['id'] );
      //console.log(this.heroe);
    })
  }
}
