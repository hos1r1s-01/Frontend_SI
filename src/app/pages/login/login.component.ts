import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {CadastroUsuario} from "../../forms/cadastro-usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin!: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private service: LoginService) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.formLogin = this.formbuilder.group({
      matricula: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  onSubmit(){
    const matricula = this.formLogin.get("matricula")?.value
    const senha = this.formLogin.get("senha")?.value
    this.service.authentication(matricula, senha).subscribe((value) => {
      const usuario: CadastroUsuario = value;
      localStorage.setItem("TOKEN", value.token);
      localStorage.setItem("USUARIO", JSON.stringify(usuario));
      this.router.navigateByUrl('tela-inicial');
    });
  }

}
