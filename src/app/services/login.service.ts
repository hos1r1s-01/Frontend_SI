import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../environments/env";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  public authentication(matricula: string, senha: string): Observable<any> {
    return this.http.post(`${environment.API}/auth`, {}, {headers: this.getHeaders(matricula, senha)});
  }

  public logout(){
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USER');
    this.router.navigateByUrl('');
  }

  private getHeaders(matricula: string, senha: string) : HttpHeaders {
    let header: HttpHeaders = new HttpHeaders();
    header = header.append('matricula', matricula);
    header = header.append('senha', senha);

    return header;
  }

}
