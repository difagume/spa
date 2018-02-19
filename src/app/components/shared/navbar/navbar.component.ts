import { Component, OnInit } from '@angular/core';
//para importar a la pagina
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this._router.navigate(['/buscar', termino]);
  }
}
