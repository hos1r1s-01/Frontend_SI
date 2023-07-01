import { Component, OnInit } from '@angular/core';
import { Sugestao } from 'src/app/forms/sugestao';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-box-sugestao',
  templateUrl: './box-sugestao.component.html',
  styleUrls: ['./box-sugestao.component.css']
})
export class BoxSugestaoComponent implements OnInit {

  formSugestao!: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm(new Sugestao())
  }

  createForm(sugestao: Sugestao) {
    this.formSugestao = this.formbuilder.group({
      texto: [sugestao.texto]
    })
  }

  onSubmit(){
    console.log(this.formSugestao.value)
  }

}
