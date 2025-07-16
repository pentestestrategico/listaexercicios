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
      rotulo: 'Calça e Blusa Social',
      detalhe: 'Calça preta e blusa azul claro, perfeita pra ambientes formais.'
    },
      {
      id: 2,
      foto: 'assets/imagem2.jpg',
      rotulo: 'Vestido verde',
      detalhe: 'Vestido longo verde,perfeito para festas.'
    },
      {
      id: 3,
      foto: 'assets/imagem3.jpg',
      rotulo: 'macacão florido',
      detalhe: 'macacão com estampa floral, ideal para eventos casuais.'
    },
      {
      id: 4,
      foto: 'assets/imagem4.jpg',
      rotulo: 'Vestido de renda',
      detalhe: 'Vestido de renda delicada, ideal para ocasiões especiais.'
    },
      {
      id: 5,
      foto: 'assets/imagem5.jpg',
      rotulo: 'Vestido branco',
      detalhe: 'Vestido branco clássico, perfeito para eventos formais e casamentos.'
    },
        {
      id: 6,
      foto: 'assets/imagem6.jpg',
      rotulo: 'Conjunto Casual Confortável',
      detalhe: 'Conjunto casual em malha macia, perfeito para o dia a dia com praticidade e muito estilo.'
    }
  ];

  getFeaturedProducts(): Produto[] {
    return this.produtos; // Retorna a lista de produtos
  }

  // Método getProdutos() conforme solicitado
  getProdutos(): Produto[] {
    return this.produtos; // Retorna a lista de produtos
  }
}


