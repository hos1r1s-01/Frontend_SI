import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../../environments/env";
import {Disciplina} from "../forms/Disciplina";
import {Professor} from "../forms/Professor";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private router: Router) { }

  public criarFeedback(disciplina: Disciplina, professor: Professor): Observable<any> {
    const feedback = {
      disciplina: disciplina,
      professor: professor,
    }
    return this.http.post(`${environment.API}/disciplina`, feedback, {headers: this.getAuthorizationFromHeader()});
  }

  public getTodosFeedbacks(): Observable<any> {
    return this.http.get(`${environment.API}/professor`, {headers: this.getAuthorizationFromHeader()});
  }

  public getFeedbackPorFiltro(filtro: Professor): Observable<any> {
    return this.http.post(`${environment.API}/professor/filtro`, filtro, {headers: this.getAuthorizationFromHeader()});
  }

  private getAuthorizationFromHeader() : HttpHeaders {
    let header: HttpHeaders = new HttpHeaders();
    const tokenJson = localStorage.getItem("TOKEN");
    console.log(`TokenJson: ${tokenJson}`)
    header = header.append("authorization", tokenJson ? tokenJson : 'none');
    return header;
  }

}