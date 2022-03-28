import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Emprestimo } from 'src/Objects/emprestimo';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  pathbase: string = "/api/emprestimo";

  constructor(private http: HttpClient) { }

  public GetEmprestimo(): Observable<Emprestimo[]>{
    return this.http.get<Emprestimo[]>(ApiServiceService.urlPadrao + this.pathbase)
  }
  public PostEmprestimo(emprestimo: Emprestimo){
    return this.http.post(ApiServiceService.urlPadrao + this.pathbase, emprestimo)
  }
}
