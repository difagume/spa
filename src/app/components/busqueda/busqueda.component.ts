import { Component, OnInit } from '@angular/core';
//Para recibir parametros que vienen por el URL
import { ActivatedRoute } from '@angular/router';
//importo el Servicio
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  //heroe: Heroe;
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) { }

  ngOnInit() {
    //recibe el paremetro que pusimos en app.routes.ts
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['nombre']);
      this.termino = params['termino'];

      this.heroes = this._heroesService.buscarHeroe(this.termino);
      //console.log(this.heroes);
      if (this.heroes.length > 0) {
        //console.log(this.heroeArr[0]);
        //this.heroe = this.heroeArr[0];
      } else {
        console.log("No hay coincidencias con la busqueda :(");
      }
    })


  }
}
