import {CadastroUsuario} from "./cadastro-usuario";
import {Disciplina} from "./disciplina";

export class FeedbackDisciplina {
  codigo: string = '';
  anoSemestre: string = '';
  texto: string = '';
  avaliacao: string = '';
  disciplina!: Disciplina;
  usuario!: CadastroUsuario;
}
