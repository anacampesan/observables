import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../_services/pokemon.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService]
})

export class HomeComponent implements OnInit {
  pagination = 0;

  pokemonStats: Observable<any>[] = [];
  pokemon$ = new Subject<any>();

  constructor(private _pokemon: PokemonService,
              private _http: HttpClient) { }

  ngOnInit() {
    this._pokemon.getByName(this.pokemon$).subscribe(pokemon => {
      this.pokemonStats.push(pokemon);
    });
  }

  print() {
    console.log(this.pokemonStats);
  }
}
