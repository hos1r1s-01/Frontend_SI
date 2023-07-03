import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  onClickContatos(){
    this.router.navigateByUrl("contato");
  }

  onClickFaq(){
    this.router.navigateByUrl("faq");
  }

  onClickSobreNos(){
    this.router.navigateByUrl("sobre-nos");
  }

  onClickCadastrarFeedback(){
    this.router.navigateByUrl("cadastrar-feedback");
  }

  onClickConsultaProfessor(){
    this.router.navigateByUrl("consultar/professor");
  }

  onClickConsultaDisciplina(){
    this.router.navigateByUrl("consultar/disciplina");
  }
}
