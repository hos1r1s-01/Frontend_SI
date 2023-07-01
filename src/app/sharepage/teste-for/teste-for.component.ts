import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-for',
  templateUrl: './teste-for.component.html',
  styleUrls: ['./teste-for.component.css']
})
export class TesteForComponent implements OnInit{

  feedbacks: string[] = ["materia 1", "materia 2", "materia 3", "materia 4"];

  constructor() {}

  ngOnInit(): void {   
  }

}
