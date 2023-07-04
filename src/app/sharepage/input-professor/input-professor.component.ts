import {Component, Input, OnInit} from '@angular/core';
import {Professor} from "../../forms/professor";
import {FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-professor',
  templateUrl: './input-professor.component.html',
  styleUrls: ['./input-professor.component.css']
})
export class InputProfessorComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() formControlName: string = 'professor';

  professores: Professor[] = [];

  ngOnInit() {
<<<<<<< HEAD
    this.professores.push({nomeCompleto: 'Fernando Chacon'})
    this.professores.push({nomeCompleto: 'Fernanda Oliveira'})
    this.professores.push({nomeCompleto: 'Ladeira'})
    this.professores.push({nomeCompleto: 'Maristela'})
    this.professores.push({nomeCompleto: 'Vitor Versiani'})
=======
    this.professores.push({nomeCompleto: 'Thiago Faleiros'})
    this.professores.push({nomeCompleto: 'Jorge Lucero'})
    this.professores.push({nomeCompleto: 'Daniel Porto'})
    this.professores.push({nomeCompleto: 'Marcus Lamar'})
    this.professores.push({nomeCompleto: 'Aline Barros'})
    this.professores.push({nomeCompleto: 'Vinicius Ruela'})
    this.professores.push({nomeCompleto: 'Guilherme Novaes'})
    this.professores.push({nomeCompleto: 'Carla Castanho'})
    this.professores.push({nomeCompleto: 'Frank Ned Santa Cruz'})
    this.professores.push({nomeCompleto: 'Gabriel de Carvalho'})
    this.professores.push({nomeCompleto: 'Pedro Garcia'})
    this.professores.push({nomeCompleto: 'Luis Paulo Garcia'})
    this.professores.push({nomeCompleto: 'Edison Ishikawa'})
    this.professores.push({nomeCompleto: 'Giovanni Santos'})
    this.professores.push({nomeCompleto: 'Fabricio Ataides'})
    this.professores.push({nomeCompleto: 'Daniel Sundfeld'})
    this.professores.push({nomeCompleto: 'Rose Shimizu'})
    this.professores.push({nomeCompleto: 'Nilton Correia'})
    this.professores.push({nomeCompleto: 'Maria de Fátima'})
    this.professores.push({nomeCompleto: 'Camilo Chang'})
    this.professores.push({nomeCompleto: 'Roberta Barbosa'})
    this.professores.push({nomeCompleto: 'Aleteia Patricia'})
    this.professores.push({nomeCompleto: 'Eduardo Adilio'})
    this.professores.push({nomeCompleto: 'Marcos Caetano'})
    this.professores.push({nomeCompleto: 'Vander Ramos'})
    this.professores.push({nomeCompleto: 'Marcelo Ladeira'})
    this.professores.push({nomeCompleto: 'Flavio de Barros'})
    this.professores.push({nomeCompleto: 'Ricardo Pezzuol'})
    this.professores.push({nomeCompleto: 'Fernanda Lima'})
    this.professores.push({nomeCompleto: 'Bruno Luiggi'})
    this.professores.push({nomeCompleto: 'Fernando Chacon'})
    this.professores.push({nomeCompleto: 'Gabriel Siqueira'})
    this.professores.push({nomeCompleto: 'Genaina Nunes'})
    this.professores.push({nomeCompleto: 'Priscila Solis'})
    this.professores.push({nomeCompleto: 'Li Weigang'})
    this.professores.push({nomeCompleto: 'Dibio Leandro Borges'})
    this.professores.push({nomeCompleto: 'Jorge Henrique Cabral'})
    this.professores.push({nomeCompleto: 'Germana Menezes'})
    this.professores.push({nomeCompleto: 'Wilson Veneziano'})
    this.professores.push({nomeCompleto: 'Mauricio Ayala'})
    this.professores.push({nomeCompleto: 'Flavio CAvalcanti'})
    this.professores.push({nomeCompleto: 'José Edil Medeiros'})
    this.professores.push({nomeCompleto: 'Jan Mendonca'})
    this.professores.push({nomeCompleto: 'Rodrigo Bonifacio'})
    this.professores.push({nomeCompleto: 'Ricardo Lopes'})
    this.professores.push({nomeCompleto: 'João José Costa'})
    this.professores.push({nomeCompleto: 'Edna Dias'})
    this.professores.push({nomeCompleto: 'Alba Cristina'})
    this.professores.push({nomeCompleto: 'Livia Brisolla'})
    this.professores.push({nomeCompleto: 'Leticia Lopes Leite'})
    this.professores.push({nomeCompleto: 'Carla Maria Cavalcante'})
    this.professores.push({nomeCompleto: 'Marcelo Mandelli'})
    this.professores.push({nomeCompleto: 'Marcelo Marotta'})
>>>>>>> 9c0bde8 (novos-inputs)
  }

}
