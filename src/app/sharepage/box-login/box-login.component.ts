<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { ServicoLogin } from 'src/app/services/servico-login';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
>>>>>>> 5d05e58 (v1.2-notebook)

@Component({
  selector: 'app-box-login',
  templateUrl: './box-login.component.html',
  styleUrls: ['./box-login.component.css']
})
<<<<<<< HEAD
export class BoxLoginComponent {
=======
export class BoxLoginComponent implements OnInit {
  
  formLogin!: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm(new ServicoLogin())
    
  }

  createForm(login: ServicoLogin){
    this.formLogin = this.formbuilder.group({
      email: [login.email],
      senha: [login.senha]
    })
  }

  onSubmit(){
    console.log(this.formLogin.value);
  }
>>>>>>> 5d05e58 (v1.2-notebook)

}
