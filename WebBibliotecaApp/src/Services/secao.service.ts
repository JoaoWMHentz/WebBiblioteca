import { ApiServiceService } from './api-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Secao } from 'src/Objects/Secao';

@Injectable({
  providedIn: 'root'
})

export class SecaoService {

  pathBase:string = "/api/cadsecao";

  constructor(private http: HttpClient) { }

  public GetSecao():Observable<Secao[]>{
    return this.http.get<Secao[]>(ApiServiceService.urlPadrao + this.pathBase)
  }
}
