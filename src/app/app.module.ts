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
import { BoxLoginComponent } from './sharepage/box-login/box-login.component';
import { BoxCadastroComponent } from './sharepage/box-cadastro/box-cadastro.component';
import { BoxPrimeiroLoginComponent } from './sharepage/box-primeiro-login/box-primeiro-login.component';
import { BoxCadastroDisciplinaComponent } from './sharepage/box-cadastro-disciplina/box-cadastro-disciplina.component';
import { BoxCadastroProfessorComponent } from './sharepage/box-cadastro-professor/box-cadastro-professor.component';
import { BoxSugestaoComponent } from './sharepage/box-sugestao/box-sugestao.component';

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
    BoxLoginComponent,
    BoxCadastroComponent,
    BoxPrimeiroLoginComponent,
    BoxCadastroDisciplinaComponent,
    BoxCadastroProfessorComponent,
    BoxSugestaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
