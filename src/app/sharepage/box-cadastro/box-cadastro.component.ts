import { Component, OnInit } from '@angular/core';
import { CadastroUsuario } from 'src/app/forms/cadastro-usuario';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-box-cadastro',
  templateUrl: './box-cadastro.component.html',
  styleUrls: ['./box-cadastro.component.css']
})
export class BoxCadastroComponent implements OnInit {

  formCadastroUser!: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm(new CadastroUsuario)
  }

  createForm(cadastroUser: CadastroUsuario) {
    this.formCadastroUser = this.formbuilder.group({
      nome: [cadastroUser.nome],
      email: [cadastroUser.email],
      senha: [cadastroUser.senha],
      senhaConfirmada: [cadastroUser.senhaConfirmada]
    })
  }

  onSubmit(){
    console.log(this.formCadastroUser.value)
  }

}
