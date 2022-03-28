import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from 'src/Objects/livro';
import { ApiServiceService } from './api-service.service';

@Injectable({
    providedIn: 'root'
  })
export class LivroService {
    pathBase: string = "/api/cadlivro"

    constructor(private http: HttpClient) { }

    public GetLivro(id: number):Observable<Livro[]> {
        return this.http.get<Livro[]>(ApiServiceService.urlPadrao + this.pathBase + "/" + id)
    }
    public PostLivro(livro: Livro){
      return this.http.post(ApiServiceService.urlPadrao + this.pathBase, livro)
    }

  }
