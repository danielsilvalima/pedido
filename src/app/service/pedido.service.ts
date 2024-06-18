import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const config = require('../config/api.json');

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClient: HttpClient) { }

  list(id: string):Observable<any>{
    return this.httpClient.get<any>(`${config.API}/${id}`);
  }

  /*findByName(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${config.API}/${name}`);
  }*/

  /*findByName(name: string): Observable<any> {
    let teste = this.httpClient.get(`${config.API}/${name}`);
    return teste;
  }*/
}
