import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { PrimeiroLoginComponent } from './pages/primeiro-login/primeiro-login.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { CadastroFeedbackDisciplinaComponent } from './pages/cadastro-feedback-disciplina/cadastro-feedback-disciplina.component';
import { CadastroFeedbackProfessorComponent } from './pages/cadastro-feedback-professor/cadastro-feedback-professor.component';
import { FeedbackDisciplinaComponent } from './pages/feedback-disciplina/feedback-disciplina.component';
import { FeedbackProfessorComponent } from './pages/feedback-professor/feedback-professor.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'cadastro-usuario', component:CadastroUsuarioComponent},
  {path:'primeiro-login', component:PrimeiroLoginComponent},
  {path:'tela-inicial', component:TelaInicialComponent},
  {path:'contato', component:ContatoComponent},
  {path:'faq', component:FaqComponent},
  {path:'sobre-nos', component:SobreNosComponent},
  {path:'feedback/disciplina', component:CadastroFeedbackDisciplinaComponent},
  {path:'feedback/professor', component:CadastroFeedbackProfessorComponent},
  {path: 'consultar/disciplina', component:FeedbackDisciplinaComponent},
  {path:'consultar/professor', component:FeedbackProfessorComponent}
  //{path:'pretencao/', component:}
  // {path:'pretencao/resultado', component:}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
