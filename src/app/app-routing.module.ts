import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { PrimeiroLoginComponent } from './pages/primeiro-login/primeiro-login.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'cadastro-usuario', component:CadastroUsuarioComponent},
  {path:'primeiro-login', component:PrimeiroLoginComponent},
  {path:'tela-inicial', component:TelaInicialComponent},
  {path:'contato', component:ContatoComponent},
  {path:'faq', component:FaqComponent},
  {path:'sobre-nos', component:SobreNosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
