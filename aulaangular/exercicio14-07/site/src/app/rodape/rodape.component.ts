import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rodape',
  imports: [CommonModule],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {
  
  // Ano atual para o copyright
  anoAtual = new Date().getFullYear();

  // Dados da empresa
  empresa = {
    nome: 'Loja Estilo Feminino',
    descricao: 'Especializada em moda feminina exclusiva, oferecemos peças únicas que realçam a beleza e personalidade de cada mulher, com qualidade premium e atendimento diferenciado.',
    email: 'contato@lojaestilofeminino.com',
    telefone: '(21) 99999-9999',
    endereco: 'Rio de Janeiro, RJ - Brasil'
  };

  // Redes sociais
  redesSociais = [
    {
      nome: 'Facebook',
      url: 'https://facebook.com/',
      icone: '📘'
    },
    {
      nome: 'Instagram',
      url: 'https://instagram.com/',
      icone: '📷'
    },
  
    
  ];

  // Links úteis
  linksUteis = [
    { nome: 'Política de Privacidade', url: '/privacidade' },
    { nome: 'Termos de Uso', url: '/termos' },
    { nome: 'FAQ', url: '/faq' },
    { nome: 'Suporte', url: '/suporte' }
  ];

  /**
   * Abre link de rede social em nova aba
   */
  abrirRedeSocial(url: string): void {
    window.open(url, '_blank');
  }
}
