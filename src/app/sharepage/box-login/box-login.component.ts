import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/forms/login';
import  {  FormBuilder,  FormGroup, Validators  }  from  '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-box-login',
  templateUrl: './box-login.component.html',
  styleUrls: ['./box-login.component.css']
})
export class BoxLoginComponent implements OnInit {
  
  formLogin!: FormGroup;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm(new Login())
    
  }

  createForm(login: Login){
    this.formLogin = this.formbuilder.group({
      email: [login.email, [Validators.required, Validators.email]],
      senha: [login.senha]
    })
  }

  onSubmit(){
    console.log(this.formLogin.value);
  }
  

}
