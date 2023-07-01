import { Component, OnInit } from '@angular/core';
import { CadastroDisciplina } from 'src/app/forms/cadastro-disciplina';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-cadastro-disciplina',
  templateUrl: './box-cadastro-disciplina.component.html',
  styleUrls: ['./box-cadastro-disciplina.component.css']
})
export class BoxCadastroDisciplinaComponent implements OnInit {

  formCadastroDisciplina!: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm(new CadastroDisciplina)
  }

  createForm(cadastroDisciplina: CadastroDisciplina) {
    this.formCadastroDisciplina = this.formbuilder.group({
      nome: [cadastroDisciplina.nome],
      ano: [cadastroDisciplina.ano],
      texto: [cadastroDisciplina.texto],
      avaliacao: [cadastroDisciplina.avaliacao]
    })
  }

  onSubmit(){
    console.log(this.formCadastroDisciplina.value);
    this.router.navigateByUrl("feedback/professor");
  }

}
