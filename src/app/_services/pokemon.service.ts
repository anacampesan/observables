import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class PokemonService {
  baseUrl = 'http://pokeapi.co/api/v2';
  getByNameUrl = '/pokemon/';

  constructor(private _http: HttpClient) { }

  getByName(name) {
    return name.debounceTime(400)
               .distinctUntilChanged()
               .flatMap(item => this._http.get(this.baseUrl + this.getByNameUrl + item));
  }

}
