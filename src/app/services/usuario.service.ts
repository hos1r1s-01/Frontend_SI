import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CadastroUsuario} from "../forms/cadastro-usuario";
import {environment} from "../../environments/env";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private router: Router) { }

  public criarUsuario(usuario: CadastroUsuario): Observable<any> {
    return this.http.post(`${environment.API}/usuario`, usuario);
  }

}
