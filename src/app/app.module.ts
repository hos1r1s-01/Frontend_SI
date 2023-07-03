import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { PrimeiroLoginComponent } from './pages/primeiro-login/primeiro-login.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { BoxCadastroComponent } from './sharepage/box-cadastro/box-cadastro.component';
import { BoxPrimeiroLoginComponent } from './sharepage/box-primeiro-login/box-primeiro-login.component';
import { BoxSugestaoComponent } from './sharepage/box-sugestao/box-sugestao.component';
import { TesteForComponent } from './sharepage/teste-for/teste-for.component';
import { HeaderFeedProfessorComponent } from './sharepage/header-feed-professor/header-feed-professor.component';
import { FeedbackProfessorComponent } from './pages/feedback-professor/feedback-professor.component';
import { FeedbackDisciplinaComponent } from './pages/feedback-disciplina/feedback-disciplina.component';
import { CadastroFeedbackComponent } from './pages/cadastro-feedback/cadastro-feedback.component';
import {HttpClientModule} from "@angular/common/http";
import { CabecalhoComponent } from './sharepage/cabecalho/cabecalho.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    PrimeiroLoginComponent,
    TelaInicialComponent,
    ContatoComponent,
    FaqComponent,
    SobreNosComponent,
    BoxCadastroComponent,
    BoxPrimeiroLoginComponent,
    BoxSugestaoComponent,
    TesteForComponent,
    HeaderFeedProfessorComponent,
    FeedbackProfessorComponent,
    FeedbackDisciplinaComponent,
    CadastroFeedbackComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
