import { Component, OnInit } from '@angular/core';
import { PrimeiroLogin } from 'src/app/forms/primeiro-login';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-primeiro-login',
  templateUrl: './box-primeiro-login.component.html',
  styleUrls: ['./box-primeiro-login.component.css']
})
export class BoxPrimeiroLoginComponent implements OnInit {

  formPrimeiroLogin! : FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm(new PrimeiroLogin())
  }

  createForm(primeiroLogin: PrimeiroLogin) {
    this.formPrimeiroLogin = this.formbuilder.group({
      matricula: [primeiroLogin.matricula],
      curso: [primeiroLogin.curso],
      semestre: [primeiroLogin.semestre]
    })
  }

  onSubmit(){
    console.log(this.formPrimeiroLogin.value);
    this.router.navigateByUrl("tela-inicial")
  }

}
