import {Component, Input, OnInit} from '@angular/core';
import {Professor} from "../../forms/professor";
import {FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-professor',
  templateUrl: './input-professor.component.html',
  styleUrls: ['./input-professor.component.css']
})
export class InputProfessorComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() formControlName: string = 'professor';

  professores: Professor[] = [];

  ngOnInit() {
    this.professores.push({nomeCompleto: 'Fernando Chacon'})
    this.professores.push({nomeCompleto: 'Fernanda Oliveira'})
    this.professores.push({nomeCompleto: 'Ladeira'})
    this.professores.push({nomeCompleto: 'Maristela'})
    this.professores.push({nomeCompleto: 'Vitor Versiani'})
  }

}
