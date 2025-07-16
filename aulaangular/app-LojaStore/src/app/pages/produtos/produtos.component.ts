import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  fotos = [
    {
      nome: 'Manopla Governadora Aparador de Socos e Chutes - Jugui',
      imagem: '/img/manopla.jpg',
      descricao: 'MANOPLA GOVERNADORA PARA MUAY THAI E BOXE Jugui\nEsse produto, possui design arrojado e proporciona segurança e conforto ao sparring durante os treinos.\nFabricado em lona náutica super resistente, com 2 pegadas laterais reforçadas.'
    },
    {
      nome: 'Dobok Kimono Taekwondo Reforçado com Faixa Infantil Haganah',
      imagem: '/img/dobo.jpg',
      descricao: 'Kimono Taekwondo Reforçado Haganah é perfeito para a prática de treinos do dia-a-dia. Oferecemos uma modelagem própria para amplitude máxima de chutes e conforto para nossos atletas.\nPaletó e calça com tecido de sarja de 400g/m (250/m²) – 100% algodão;'
    },
    {
      nome: 'Protetor de Canela Caneleira Taekwondo - One Sport',
      imagem: '/img/caneleira.jpg',
      descricao: 'Ótimo produto para atletas que utilizam-se da canela para defesas e ataques durante o combate.\n\nImperdível.'
    },
    {
      nome: 'Camisa Camiseta Taekwondo TKD Ref-34 - Silver',
      imagem: '/img/camisa.jpg',
      descricao: 'Peças produzidas com tecido Dry Poliéster (malha fria), acabamento diferenciado com 3 costuras, o que garante maior resistência à peça.\nModelagem exclusiva com caimento impecável ao corpo.\nEstampa feita em sublimação total com qualidade 4K, cores vivas e vibrantes que não desbota com o tempo.'
    },
    {
      nome: 'Luva Protetor Mão Taekwondo WTF - Oficial - Competição',
      imagem: '/img/luva.jpg',
      descricao: 'Indicada para treino e competições oficiais nacionais e internacionais.\n\nModelo autorizado pela CBTKD e WTF.'
    },
    {
      nome: 'Raquete Aparador de Chutes - Dupla - UC - Unid',
      imagem: '/img/raquete.jpg',
      descricao: 'Confeccionada em lona com fundo em trama de nylon.\nIdeal para quem encara os treinamentos com seriedade e busca ampliar o desenvolvimento de suas capacidades.'
    }
  ];
}