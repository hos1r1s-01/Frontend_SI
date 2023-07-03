import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {FeedbackService} from "../../services/feedback.service";
import {Professor} from "../../forms/Professor";

@Component({
  selector: 'app-feedback-professor',
  templateUrl: './feedback-professor.component.html',
  styleUrls: ['./feedback-professor.component.css']
})
export class FeedbackProfessorComponent implements OnInit {

  formFiltroFeedbackProfessor!: FormGroup;

  feedbacks!: Professor[];

  constructor(private formBuilder: FormBuilder, private router: Router, private service: FeedbackService) {

  }

  ngOnInit(): void {
    this.createForm()
    this.service.getTodosFeedbacks().subscribe(value => {
      console.log(`Value: ${JSON.stringify(value)}`)
      this.feedbacks = value;
    })
  }

  createForm() {
    this.formFiltroFeedbackProfessor = this.formBuilder.group({
      professor: [],
      disciplina: [],
      chamada: [],
      trabalho: [],
      prova: []
    })
  }

  onSubmit() {
    const filtro: Professor = new Professor();
    filtro.nomeCompleto = 'Fernando Chacon';
    filtro.chamada = this.formFiltroFeedbackProfessor.value.chamada
    filtro.trabalho = this.formFiltroFeedbackProfessor.value.trabalho
    filtro.prova = this.formFiltroFeedbackProfessor.value.prova

    this.service.getFeedbackPorFiltro(filtro).subscribe(value => {
      this.feedbacks = value;
    })
  }

}
