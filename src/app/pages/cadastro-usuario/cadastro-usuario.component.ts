import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CadastroUsuario} from "../../forms/cadastro-usuario";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  formCadastroUser!: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private service: UsuarioService) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formCadastroUser = this.formbuilder.group({
      nome: ['', [Validators.required]],
      apelido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      matricula: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      senhaConfirmada: ['', [Validators.required]]
    })
  }

  validarCampoPreenchido(campo: string) {
    return !this.formCadastroUser.get(campo)?.valid && this.formCadastroUser.get(campo)?.touched;
  }

  aplicarClasseCSSErro(campo: string) {
    return {
      'erro': this.validarCampoPreenchido(campo)
    }
  }

  onSubmit(){
    if(this.formCadastroUser.valid) {
      const usuario: CadastroUsuario = new CadastroUsuario();
      usuario.nomeCompleto = this.formCadastroUser.value.nome
      usuario.apelido = this.formCadastroUser.value.apelido
      usuario.email = this.formCadastroUser.value.email
      usuario.matricula = this.formCadastroUser.value.matricula
      usuario.curso = this.formCadastroUser.value.curso
      usuario.senha = this.formCadastroUser.value.senha
      usuario.senhaConfirmada = this.formCadastroUser.value.senhaConfirmada
      this.service.criarUsuario(usuario).subscribe(value => {
        this.router.navigateByUrl("auth");
      });
    }
  }

}
