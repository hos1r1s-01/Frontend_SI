import { Component, Input, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/forms/disciplina';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-disciplina',
  templateUrl: './input-disciplina.component.html',
  styleUrls: ['./input-disciplina.component.css']
})
export class InputDisciplinaComponent implements OnInit{

  @Input() formGroup!: FormGroup;
  @Input() formName: string = 'disciplina';

  disciplinas: Disciplina[] = [];

  ngOnInit() {
    this.disciplinas.push({nome: 'Fundamentos Teóricos da Computação', codigo: 'CIC0002'})
    this.disciplinas.push({nome: 'Introdução aos Sistemas Computacionais', codigo: 'CIC0003'})
    this.disciplinas.push({nome: 'Algoritmos e Programação de Computadores', codigo: 'CIC0004'})
    this.disciplinas.push({nome: 'Formação Docente em Computação', codigo: 'CIC0005'})
    this.disciplinas.push({nome: 'Introdução à Ciência da Computação', codigo: 'CIC0007'})

    // this.disciplinas.push({nome: 'Tópicos Avançados em Computadores', codigo: 'CIC0087'})
    // this.disciplinas.push({nome: 'Estrutura de Dados', codigo: 'CIC0090'})
    // this.disciplinas.push({nome: 'Linguagens de Programação', codigo: 'CIC0093'})
    // this.disciplinas.push({nome: 'Teoria da Computação', codigo: 'CIC0095'})
    // this.disciplinas.push({nome: 'Bancos de Dados', codigo: 'CIC0097'})
    // this.disciplinas.push({nome: 'Organização e Arquitetura de Computadores', codigo: 'CIC0099'})
    // this.disciplinas.push({nome: 'Sistemas de Informação', codigo: 'CIC101'})
    // this.disciplinas.push({nome: 'Software Básico', codigo: 'CIC0104'})
    // this.disciplinas.push({nome: 'Engenharia de Software', codigo: 'CIC0105'})
    // this.disciplinas.push({nome: 'Sistemas Operacionais', codigo: 'CIC0108'})
    // this.disciplinas.push({nome: 'Redes de Computadores', codigo: 'CIC0124'})
    // this.disciplinas.push({nome: 'Introdução à Inteligência Artificial', codigo: 'CIC0135'})
    // this.disciplinas.push({nome: 'Informática e Sociedade', codigo: 'CIC0142'})
    // this.disciplinas.push({nome: 'Introdução à Microinformática', codigo: 'CIC0152'})
    // this.disciplinas.push({nome: 'Informática aplicada à Educação', codigo: 'CIC0158'})
    // this.disciplinas.push({nome: 'Autômatos e Computabilidade', codigo: 'CIC0161'})
    // this.disciplinas.push({nome: 'Programação Competitiva', codigo: 'CIC0169'})
    // this.disciplinas.push({nome: 'Introdução ao Processamento de Imagens', codigo: 'CIC0176'})
    // this.disciplinas.push({nome: 'Arquitetura de Processadores Digitais', codigo: 'CIC0177'})
    // this.disciplinas.push({nome: 'Lógica Computacional 1', codigo: 'CIC0182'})
    // this.disciplinas.push({nome: 'Sistemas Digitais Integrados', codigo: 'CIC0186'})
    // this.disciplinas.push({nome: 'Introdução à Engenharia de Computação', codigo: 'CIC0188'})
    // this.disciplinas.push({nome: 'Projeto e Análise de Algoritmos', codigo: 'CIC0189'})
    // this.disciplinas.push({nome: 'Introdução ao Desenvolvimento de Jogos', codigo: 'CIC0191'})
    // this.disciplinas.push({nome: 'Técnicas de Programação 1', codigo: 'CIC0197'})
    // this.disciplinas.push({nome: 'Técnicas de Programação 2', codigo: 'CIC0198'})
    // this.disciplinas.push({nome: 'Teoria e aplicação de Grafos', codigo: 'CIC0199'})
    // this.disciplinas.push({nome: 'Metodologia Científica', codigo: 'CIC0200'})
    // this.disciplinas.push({nome: 'Segurança Computacional', codigo: 'CIC0201'})
    // this.disciplinas.push({nome: 'Programação Concorrente', codigo: 'CIC0202'})
    // this.disciplinas.push({nome: 'Computação Experimental', codigo: 'CIC0203'})
    // this.disciplinas.push({nome: 'Compiladores', codigo: 'CIC0204'})
    // this.disciplinas.push({nome: 'Fundamentos de Sistemas Operacionais', codigo: 'CIC0205'})
    // this.disciplinas.push({nome: 'Métodos de Pesquisa na Lic. em Comp.', codigo: 'CIC0206'})
    // this.disciplinas.push({nome: 'Projeto Interdisciplinar de Lic. em Comp.', codigo: 'CIC0207'})
    // this.disciplinas.push({nome: 'Produção de Material Didático', codigo: 'CIC0208'})
    // this.disciplinas.push({nome: 'Supervisão de Produção de Material Didático', codigo: 'CIC0209'})
    // this.disciplinas.push({nome: 'SPPC 1', codigo: 'CIC0212'})
    // this.disciplinas.push({nome: 'SPPC 2', codigo: 'CIC0213'})
    // this.disciplinas.push({nome: 'Supervisão de Estágio em Lic. Comp. 3', codigo: 'CIC0222'})
    // this.disciplinas.push({nome: 'Introdução a Sistemas Operacionais', codigo: 'CIC0225'})
    // this.disciplinas.push({nome: 'Desenvolvimento de Aplicativos', codigo: 'CIC0226'})
    // this.disciplinas.push({nome: 'Circuitos Lógicos', codigo: 'CIC0229'})
    // this.disciplinas.push({nome: 'Laboratório de Circuitos Lógicos', codigo: 'CIC0231'})
    // this.disciplinas.push({nome: 'Métodos de Programação', codigo: 'CIC0234'})
    // this.disciplinas.push({nome: 'Teleinformática e Redes 1', codigo: 'CIC0235'})
    // this.disciplinas.push({nome: 'Teleinformática e Redes 2', codigo: 'CIC0236'})
    // this.disciplinas.push({nome: 'Introdução ao Ambiente Universitário na Comp', codigo: 'CIC0247'})
    // this.disciplinas.push({nome: 'Sistemas de Tempo Real', codigo: 'CIC0248'})
    // this.disciplinas.push({nome: 'Práticas Extensionistas em Computação', codigo: 'CIC0256'})
    // this.disciplinas.push({nome: 'Tópicos Especiais em Programação Competitiva', codigo: 'CIC0258'})
  }

}
