import { Editora } from './../Objects/Editora';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {
  pathbase: string = "/api/cadeditora";

  constructor(private http: HttpClient) { }

  public GetEditora(): Observable<Editora[]>{
    return this.http.get<Editora[]>(ApiServiceService.urlPadrao + this.pathbase)
  }

}
