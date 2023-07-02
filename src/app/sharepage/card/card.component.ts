import {Component, Input, OnInit} from '@angular/core';
import { Disciplina } from 'src/app/forms/Disciplina';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input('titulo') titulo: string = 'default';

}
