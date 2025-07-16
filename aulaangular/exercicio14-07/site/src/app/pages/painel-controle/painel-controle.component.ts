import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-painel-controle',
  imports: [CommonModule],
  templateUrl: './painel-controle.component.html',
  styleUrl: './painel-controle.component.css'
})
export class PainelControleComponent implements OnInit {
  
  // Propriedade para armazenar informações do usuário logado
  usuarioLogado: string = 'Administrador';
  
  // Propriedade para controlar a exibição de dados
  dadosCarregados: boolean = false;
  
  // Propriedade para simular dados do painel
  estatisticas = {
    totalUsuarios: 1250,
    vendas: 45000,
    pedidosPendentes: 23,
    produtosCadastrados: 156
  };

  /**
   * Construtor do componente
   * @param authService - Serviço de autenticação injetado
   * @param router - Router para navegação injetado
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Método executado na inicialização do componente
   */
  ngOnInit(): void {
    // Verifica se o usuário está realmente autenticado
    if (!this.authService.isAuthenticated()) {
      // Se não estiver autenticado, redireciona para o login
      this.router.navigate(['/painel']);
      return;
    }
    
    // Simula carregamento de dados
    setTimeout(() => {
      this.dadosCarregados = true;
    }, 1500);
  }

  /**
   * Método para realizar logout do usuário
   */
  logout(): void {
    // Chama o método logout do AuthService
    this.authService.logout();
    // Redireciona para a página de login
    this.router.navigate(['/painel']);
  }

  /**
   * Método para atualizar os dados do painel
   */
  atualizarDados(): void {
    // Reinicia o estado de carregamento
    this.dadosCarregados = false;
    
    // Simula uma nova busca de dados
    setTimeout(() => {
      // Atualiza as estatísticas com valores aleatórios
      this.estatisticas = {
        totalUsuarios: Math.floor(Math.random() * 2000) + 1000,
        vendas: Math.floor(Math.random() * 100000) + 30000,
        pedidosPendentes: Math.floor(Math.random() * 50) + 10,
        produtosCadastrados: Math.floor(Math.random() * 300) + 100
      };
      this.dadosCarregados = true;
    }, 1000);
  }
}
