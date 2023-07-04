import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { CadastroFeedbackComponent } from './pages/cadastro-feedback/cadastro-feedback.component';
import { FeedbackDisciplinaComponent } from './pages/feedback-disciplina/feedback-disciplina.component';
import { FeedbackProfessorComponent } from './pages/feedback-professor/feedback-professor.component';
import {PerfilComponent} from "./pages/perfil/perfil.component";

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path:'auth', component:LoginComponent},
  {path:'cadastrar', component:CadastroUsuarioComponent},
  {path:'tela-inicial', component:TelaInicialComponent},
  {path:'contato', component:ContatoComponent},
  {path:'faq', component:FaqComponent},
  {path:'sobre-nos', component:SobreNosComponent},
  {path:'cadastrar-feedback', component:CadastroFeedbackComponent},
  {path:'consultar/disciplina', component:FeedbackDisciplinaComponent},
  {path:'consultar/professor', component:FeedbackProfessorComponent},
  {path:'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
