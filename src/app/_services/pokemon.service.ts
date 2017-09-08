import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PokemonService {
  baseUrl = 'http://pokeapi.co/api/v2';
  getByNameUrl = '/pokemon/';

  constructor(private _http: HttpClient) { }

  // getByName(name: string) {
  //   let query = '/pokemon/' + name;
  //   return this._http
  //              .get(this.baseUrl + this.getByNameUrl)
  //              .map(response => {
  //                setTimeout(() => {
  //                    console.log('ueaheu')
  //                }, 1000);
  //              });
  // }

  getByName(name: Observable<any>) {
    return name.debounceTime(400)
               .distinctUntilChanged()
               .map(item => this.getMoreByName(item));
  }

  getMoreByName(name) {
    return this._http
               .get(this.baseUrl + this.getByNameUrl + name)
               .subscribe(res => console.log(res));
  }
}
