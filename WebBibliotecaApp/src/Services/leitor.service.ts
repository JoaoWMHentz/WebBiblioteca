import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';
import { Leitor } from './../Objects/Leitor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeitorService {

  pathBase: string = "/api/cadleitor";

  constructor(private http: HttpClient) { }

  public GetLeitor(id: number):Observable<Leitor[]> {
    return this.http.get<Leitor[]>(ApiServiceService.urlPadrao + this.pathBase + "/" + id)
  }

  public PostLeitor(leitor: Leitor){
    return this.http.post(ApiServiceService.urlPadrao + this.pathBase, leitor)
  }
  public ConsultaLeitor(nome: string, cpf: string, rg:string, email:string):Observable<Leitor[]> {
    return this.http.get<Leitor[]>(ApiServiceService.urlPadrao + "/api/conleitor" + '/' + nome + '/' + cpf + '/' + rg + '/' + email)
  }
}

