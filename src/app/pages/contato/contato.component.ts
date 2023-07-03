import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Sugestao} from "../../forms/sugestao";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formSugestao!: FormGroup;

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm(new Sugestao())
  }

  createForm(sugestao: Sugestao) {
    this.formSugestao = this.formbuilder.group({
      texto: [sugestao.texto]
    })
  }

  onSubmit() {
    console.log(this.formSugestao.value)
  }

}


