import { ApiServiceService } from './api-service.service';
import { Autor } from './../Objects/Autor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  pathBase: string = "/api/cadautor"

  constructor(private http: HttpClient) { }

  public GetAutor():Observable<Autor[]> {
    return this.http.get<Autor[]>(ApiServiceService.urlPadrao + this.pathBase)
  }
  public PostAutor(autor: Autor){
    return this.http.post(ApiServiceService.urlPadrao + this.pathBase, autor)
  }
}
