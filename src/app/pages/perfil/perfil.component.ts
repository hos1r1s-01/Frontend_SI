import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";
import {CadastroUsuario} from "../../forms/cadastro-usuario";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
  export class PerfilComponent implements OnInit {

  formPerfil!: FormGroup;
  usuario!: CadastroUsuario;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UsuarioService) {

  }

  ngOnInit() {
    this.formPerfil = this.formBuilder.group({
      matricula: ['', [Validators.required]],
      email: ['', [Validators.required]],
      curso: ['', [Validators.required]],
      apelido: ['', [Validators.required]],
      senha: [''],
      novaSenha: [''],
      confirmarSenha: [''],
    })

    const usuarioLS = JSON.parse(localStorage.getItem("USUARIO")!)
    this.service.obterUsuario(usuarioLS.matricula).subscribe((user: CadastroUsuario) => {
      this.usuario = user;
      this.formPerfil.get('matricula')?.setValue(user.matricula);
      this.formPerfil.get('email')?.setValue(user.email);
      this.formPerfil.get('curso')?.setValue(user.curso == "COMPUTACAO" ? "Computação" : "Ciências da Computação");
      this.formPerfil.get('apelido')?.setValue(user.apelido);
    })
  }

  onSubmit() {
    if(this.formPerfil.invalid) {
      alert("Os campos: matricula, e-mail, curso e apelido devem ser preenchidos.")
      return
    }

    if(this.formPerfil.value.novaSenha != this.formPerfil.value.confirmarSenha){
      alert("Os campos: nova senha e confirmar senha devem ser iguais")
      return
    }

    this.usuario.curso = this.formPerfil.value.curso.toLowerCase() == "computação" ? "COMPUTACAO" : "CIENCIAS_COMPUTACAO"
    this.usuario.apelido = this.formPerfil.value.apelido
    this.usuario.email = this.formPerfil.value.email
    if(this.formPerfil.value.senha)
      this.usuario.senha = this.formPerfil.value.senha

    if(this.formPerfil.value.novaSenha)
      this.usuario.novaSenha = this.formPerfil.value.novaSenha

    this.service.editarUsuario(this.usuario).subscribe(value => {
      console.log(value);
      this.router.navigateByUrl('/tela-inicial')
    })
  }

  logout() {
    localStorage.removeItem("USUARIO")
    localStorage.removeItem("TOKEN")
    this.router.navigateByUrl('/auth')
  }

}
