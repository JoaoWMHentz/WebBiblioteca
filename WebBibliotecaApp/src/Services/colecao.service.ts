import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colecao } from 'src/Objects/Colecao';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  pathbase: string = "/api/cadcolecao";

  constructor(private http: HttpClient) { }

  public GetColecao(id: number): Observable<Colecao[]>{
    return this.http.get<Colecao[]>(ApiServiceService.urlPadrao + this.pathbase + "/" + id)
  }
  public PostColecao(colecao: Colecao){
    return this.http.post(ApiServiceService.urlPadrao + this.pathbase, colecao)
  }
}
