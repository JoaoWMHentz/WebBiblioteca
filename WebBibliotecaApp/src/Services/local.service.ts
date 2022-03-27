import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from 'src/Objects/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  pathbase: string = "/api/cadlocal";

  constructor(private http: HttpClient) { }

  public GetLocal(): Observable<Local[]>{
    return this.http.get<Local[]>(ApiServiceService.urlPadrao + this.pathbase)
  }
  public PostLocal(local: Local){
    return this.http.post(ApiServiceService.urlPadrao + this.pathbase, local)
  }
}
