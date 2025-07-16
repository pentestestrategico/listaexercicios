import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-painel-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './painel-component.component.html',
  styleUrl: './painel-component.component.css'
})
export class PainelComponentComponent {
  // Propriedades para armazenar os dados do formulário
  login: string = '';
  senha: string = '';
  
  // Propriedade para controlar mensagens de erro
  mensagemErro: string = '';
  
  // Propriedade para controlar o estado de carregamento
  carregando: boolean = false;

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
   * Método para processar o login do usuário
   */
  onSubmit(): void {
    // Limpa mensagens de erro anteriores
    this.mensagemErro = '';
    
    // Verifica se os campos foram preenchidos
    if (!this.login || !this.senha) {
      this.mensagemErro = 'Por favor, preencha todos os campos.';
      return;
    }

    // Ativa o estado de carregamento
    this.carregando = true;

    // Simula um delay de autenticação (opcional)
    setTimeout(() => {
      // Tenta realizar o login usando o AuthService
      const loginSucesso = this.authService.login(this.login, this.senha);
      
      if (loginSucesso) {
        // Login bem-sucedido - redireciona para a área restrita
        this.router.navigate(['/painel-controle']);
      } else {
        // Login falhou - exibe mensagem de erro
        this.mensagemErro = 'Credenciais inválidas. Use login: "adm" e senha: "123".';
      }
      
      // Desativa o estado de carregamento
      this.carregando = false;
    }, 1000);
  }

  /**
   * Método para limpar o formulário e mensagens de erro
   */
  limparFormulario(): void {
    // Limpa os campos do formulário
    this.login = '';
    this.senha = '';
    // Limpa mensagens de erro
    this.mensagemErro = '';
  }
}
