import { Component, Input, OnInit } from '@angular/core';
import { AnoSemestre } from 'src/app/forms/ano-semestre';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-semestre',
  templateUrl: './input-semestre.component.html',
  styleUrls: ['./input-semestre.component.css']
})
export class InputSemestreComponent implements OnInit{

  @Input() formGroup!: FormGroup;
  @Input() formControlName: string = "anoSemestre";

  anoSemestres: AnoSemestre[] = [];

  ngOnInit() {
    this.anoSemestres.push({anoSemestre: "2010.1"})
    this.anoSemestres.push({anoSemestre: "2010.2"})
    this.anoSemestres.push({anoSemestre: "2011.1"})
    this.anoSemestres.push({anoSemestre: "2011.2"})
    this.anoSemestres.push({anoSemestre: "2012.1"})
    this.anoSemestres.push({anoSemestre: "2012.2"})
    this.anoSemestres.push({anoSemestre: "2013.1"})
    this.anoSemestres.push({anoSemestre: "2013.2"})
    this.anoSemestres.push({anoSemestre: "2014.1"})
    this.anoSemestres.push({anoSemestre: "2014.2"})
    this.anoSemestres.push({anoSemestre: "2015.1"})
    this.anoSemestres.push({anoSemestre: "2015.2"})
    this.anoSemestres.push({anoSemestre: "2016.1"})
    this.anoSemestres.push({anoSemestre: "2016.2"})
    this.anoSemestres.push({anoSemestre: "2017.1"})
    this.anoSemestres.push({anoSemestre: "2017.2"})
    this.anoSemestres.push({anoSemestre: "2018.1"})
    this.anoSemestres.push({anoSemestre: "2018.2"})
    this.anoSemestres.push({anoSemestre: "2019.1"})
    this.anoSemestres.push({anoSemestre: "2019.2"})
    this.anoSemestres.push({anoSemestre: "2020.1"})
    this.anoSemestres.push({anoSemestre: "2020.2"})
    this.anoSemestres.push({anoSemestre: "2021.1"})
    this.anoSemestres.push({anoSemestre: "2021.2"})
    this.anoSemestres.push({anoSemestre: "2022.1"})
    this.anoSemestres.push({anoSemestre: "2022.2"})
    this.anoSemestres.push({anoSemestre: "2023.1"})
    this.anoSemestres.push({anoSemestre: "2023.2"})
  }

}

