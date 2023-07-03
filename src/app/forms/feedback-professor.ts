import {CadastroUsuario} from "./cadastro-usuario";

export class FeedbackProfessor {
  nomeCompleto: string = '';
  chamada: boolean = false;
  trabalho: boolean = false;
  prova: boolean = false;
  avaliacao: string = '';
  explicacao: string ='';
  usuario!: CadastroUsuario;
}
