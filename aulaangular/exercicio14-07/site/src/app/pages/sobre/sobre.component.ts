import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent implements OnInit, OnDestroy {
  
  // Controle do carrossel
  slideAtual = 0;
  intervalId: any;
  autoPlayAtivo = true;

  // Dados do carrossel
  slides = [
    {
      imagem: 'assets/imagem1.jpg',
      titulo: 'Elegância e Sofisticação',
      descricao: 'Peças cuidadosamente selecionadas para mulheres que valorizam a elegância e buscam um estilo único e sofisticado.',
      cor: '#e91e63'
    },
    {
      imagem: 'assets/imagem2.jpg',
      titulo: 'Qualidade Premium',
      descricao: 'Tecidos nobres e acabamentos impecáveis em cada peça, garantindo durabilidade, conforto e um caimento perfeito.',
      cor: '#9c27b0'
    },
    {
      imagem: 'assets/imagem3.jpg',
      titulo: 'Tendências da Moda',
      descricao: 'Sempre antenadas às últimas tendências internacionais, trazemos o que há de mais moderno no mundo da moda feminina.',
      cor: '#673ab7'
    },
    {
      imagem: 'assets/imagem4.jpg',
      titulo: 'Atendimento Personalizado',
      descricao: 'Nossa equipe especializada oferece consultoria de estilo personalizada para ajudar você a encontrar o look perfeito.',
      cor: '#3f51b5'
    },
    {
      imagem: 'assets/imagem5.jpg',
      titulo: 'Experiência Única',
      descricao: 'Mais de 15 anos dedicados à moda feminina, criando experiências inesquecíveis e realçando a beleza de cada cliente.',
      cor: '#2196f3'
    }
  ];

  // Dados da empresa
  empresa = {
    nome: 'Loja Estilo Feminino',
    missao: 'Realçar a beleza e autoestima de cada mulher através de peças exclusivas e um atendimento diferenciado, promovendo confiança e elegância.',
    visao: 'Ser reconhecida como a principal referência em moda feminina, inspirando mulheres a expressarem sua personalidade através do estilo.',
    valores: [
      'Elegância e sofisticação',
      'Qualidade premium',
      'Atendimento personalizado',
      'Inovação em moda',
      'Empoderamento feminino',
      'Sustentabilidade'
    ],
    estatisticas: [
      { numero: '2000+', descricao: 'Clientes Satisfeitas' },
      { numero: '15+', descricao: 'Anos de Experiência' },
      { numero: '500+', descricao: 'Peças Exclusivas' },
      { numero: '98%', descricao: 'Satisfação Garantida' }
    ]
  };

  ngOnInit(): void {
    this.iniciarAutoPlay();
  }

  ngOnDestroy(): void {
    this.pararAutoPlay();
  }

  /**
   * Inicia o autoplay do carrossel
   */
  iniciarAutoPlay(): void {
    if (this.autoPlayAtivo) {
      this.intervalId = setInterval(() => {
        this.proximoSlide();
      }, 4000);
    }
  }

  /**
   * Para o autoplay do carrossel
   */
  pararAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Vai para o próximo slide
   */
  proximoSlide(): void {
    this.slideAtual = (this.slideAtual + 1) % this.slides.length;
  }

  /**
   * Vai para o slide anterior
   */
  slideAnterior(): void {
    this.slideAtual = this.slideAtual === 0 ? this.slides.length - 1 : this.slideAtual - 1;
  }

  /**
   * Vai para um slide específico
   */
  irParaSlide(index: number): void {
    this.slideAtual = index;
  }

  /**
   * Pausa/retoma o autoplay
   */
  toggleAutoPlay(): void {
    this.autoPlayAtivo = !this.autoPlayAtivo;
    if (this.autoPlayAtivo) {
      this.iniciarAutoPlay();
    } else {
      this.pararAutoPlay();
    }
  }
}
