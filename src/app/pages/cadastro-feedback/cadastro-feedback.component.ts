import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Disciplina} from "../../forms/disciplina";
import {Professor} from "../../forms/professor";
import {FeedbackService} from "../../services/feedback.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-cadastro-feedback-disciplina',
  templateUrl: './cadastro-feedback.component.html',
  styleUrls: ['./cadastro-feedback.component.css']
})
export class CadastroFeedbackComponent {

  isVisualizacaoDisciplina: boolean = true;

  formCadastroDisciplina!: FormGroup;
  formCadastroProfessor!: FormGroup;

  disciplina: Disciplina = new Disciplina();
  professor: Professor = new Professor();

  constructor(private formbuilder: FormBuilder, private router: Router, private service: FeedbackService) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formCadastroDisciplina = this.formbuilder.group({
      codigo: [],
      ano: [],
      texto: [],
      avaliacao: []
    })

    this.formCadastroProfessor = this.formbuilder.group({
      nome: [],
      chamada: [],
      trabalho: [],
      prova: [],
      avaliacao: [],
      explicacao: []
    })
  }

  onSubmitDisciplina(){
    this.disciplina.codigo = this.formCadastroDisciplina.value.codigo
    this.disciplina.anoSemestre = this.formCadastroDisciplina.value.ano
    this.disciplina.texto = this.formCadastroDisciplina.value.texto
    this.disciplina.avaliacao = this.formCadastroDisciplina.value.avaliacao

    this.isVisualizacaoDisciplina = false;
  }

  onSubmitProfessor(){
    this.professor.nomeCompleto = this.formCadastroProfessor.value.nome
    this.professor.trabalho = this.formCadastroProfessor.value.trabalho
    this.professor.prova = this.formCadastroProfessor.value.prova
    this.professor.chamada = this.formCadastroProfessor.value.chamada
    this.professor.avaliacao = this.formCadastroProfessor.value.avaliacao
    this.professor.explicacao = this.formCadastroProfessor.value.explicacao

    this.service.criarFeedback(this.disciplina, this.professor).subscribe(value => {
      console.log(value)
    })

    this.router.navigateByUrl("tela-inicial");
    this.isVisualizacaoDisciplina = true;
  }

}
