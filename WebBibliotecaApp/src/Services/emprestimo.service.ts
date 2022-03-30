import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Emprestimo } from 'src/Objects/emprestimo';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { Livro } from 'src/Objects/livro';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  pathbase: string = "/api/emprestimo";
  pathbase2: string = "/api/devolver";

  constructor(private http: HttpClient) { }

  public GetEmprestimo(): Observable<Emprestimo[]>{
    return this.http.get<Emprestimo[]>(ApiServiceService.urlPadrao + this.pathbase)
  }
  public PostEmprestimo(emprestimo: Emprestimo){
    console.log(emprestimo)
    return this.http.post(ApiServiceService.urlPadrao + this.pathbase, emprestimo)
  }
  public Devolver(idEmprestimo: number){
    console.log(idEmprestimo)
    return this.http.post(ApiServiceService.urlPadrao + this.pathbase2, idEmprestimo)
  }
  public GetLivro():Observable<Livro[]> {
    return this.http.get<Livro[]>(ApiServiceService.urlPadrao + "/api/getlivro")
}
}
