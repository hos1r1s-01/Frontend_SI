import { Component, OnInit } from '@angular/core';
import { CadastroProfessor } from 'src/app/forms/cadastro-professor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-cadastro-professor',
  templateUrl: './box-cadastro-professor.component.html',
  styleUrls: ['./box-cadastro-professor.component.css']
})
export class BoxCadastroProfessorComponent implements OnInit{
  
  formCadastroProfessor!: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm(new CadastroProfessor)
  }

  createForm(cadastroProfessor: CadastroProfessor){
    this.formCadastroProfessor = this.formbuilder.group({
      nome: [cadastroProfessor.nome],
      sobrenome: [cadastroProfessor.sobrenome],
      chamada: [cadastroProfessor.chamada],
      trabalho: [cadastroProfessor.trabalho],
      prova: [cadastroProfessor.prova],
      avaliacao: [cadastroProfessor.avaliacao],
      explicacao: [cadastroProfessor.explicacao]
    })
  }

  onSubmit(){
    console.log(this.formCadastroProfessor.value);
    this.router.navigateByUrl("tela-inicial");
  }
}
