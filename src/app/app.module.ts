import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 5d05e58 (v1.2-notebook)

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
    BoxCadastroComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
    ReactiveFormsModule
>>>>>>> 5d05e58 (v1.2-notebook)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
