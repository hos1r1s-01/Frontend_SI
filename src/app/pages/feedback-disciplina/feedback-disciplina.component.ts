import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FeedbackProfessor} from "../../forms/feedback-professor";
import {Router} from "@angular/router";
import {FeedbackService} from "../../services/feedback.service";
import {FeedbackDisciplina} from "../../forms/feedback-disciplina";

@Component({
  selector: 'app-feedback-disciplina',
  templateUrl: './feedback-disciplina.component.html',
  styleUrls: ['./feedback-disciplina.component.css']
})
export class FeedbackDisciplinaComponent implements OnInit {

  formFiltroFeedbackDisciplina!: FormGroup;

  feedbacks!: FeedbackDisciplina[];

  constructor(private formBuilder: FormBuilder, private router: Router, private service: FeedbackService) {

  }

  ngOnInit(): void {
    this.createForm()
    this.service.getTodosFeedbacksDeDisciplina().subscribe(value => {
      console.log("Value =>" + JSON.stringify(value))
      this.feedbacks = value;
    })
  }

  createForm() {
    this.formFiltroFeedbackDisciplina = this.formBuilder.group({
      disciplina: [],
    })
  }

  onSubmit() {
    const codigo = this.formFiltroFeedbackDisciplina.value.disciplina;
    this.service.getFeedbackDisciplinaPorFiltro(codigo).subscribe(value => {
      this.feedbacks = value;
    })
  }

}
