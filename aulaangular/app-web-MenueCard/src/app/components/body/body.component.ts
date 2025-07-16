import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  // cards: string[] = [
  //   'card 1', 'card 2', 'card 3',
  //   'card 4', 'card 5', 'card 6',
  //   'card 7', 'card 8', 'card 9',
  // ]

  cards = [
  {
    nome: 'Tênis de Corrida',
    imagem: '/img/tenis.jpg',
    descricao: 'Confortável e resistente.'
  },
  {
    nome: 'Chinelo de Praia',
    imagem: '/img/chinelo.jpg',
    descricao: 'Ideal para dias quentes.'
  },
  {
    nome: 'Bota de Couro',
    imagem: '/img/bota.jpg',
    descricao: 'Estilo e durabilidade.'
  }
];




}

