import { Injectable } from '@angular/core';

// Define uma interface chamada 'Product', que descreve a estrutura de um produto
export interface Produto {
  id: number;
  foto: string;
  rotulo: string;
  detalhe: string;}

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  constructor() { }

  private produtos: Produto[] = [
    {
      id: 1,
      foto: 'assets/imagem1.jpg',
      rotulo: 'Produto 1',
      detalhe: 'Detalhe do Produto 1'
    },
      {
      id: 2,
      foto: 'assets/imagem2.jpg',
      rotulo: 'Produto 2',
      detalhe: 'Detalhe do Produto 2'
    },
      {
      id: 3,
      foto: 'assets/imagem3.jpg',
      rotulo: 'Produto 3',
      detalhe: 'Detalhe do Produto 3'
    },
      {
      id: 4,
      foto: 'assets/imagem4.jpg',
      rotulo: 'Produto 4',
      detalhe: 'Detalhe do Produto 4'
    },
  ];

  getFeaturedProducts(): Produto[] {
    return this.produtos; // Retorna a lista de produtos
  }

  // Método getProdutos() conforme solicitado
  getProdutos(): Produto[] {
    return this.produtos; // Retorna a lista de produtos
  }
}


