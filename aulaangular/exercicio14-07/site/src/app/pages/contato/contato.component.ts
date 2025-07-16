import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [FormsModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  // Propriedades do formulário
  contato = {
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  };

  // Controle de estado do formulário
  formularioEnviado = false;
  enviando = false;
  mensagemSucesso = '';
  mensagemErro = '';

  /**
   * Método para enviar o formulário
   */
  onSubmit(): void {
    // Limpa mensagens anteriores
    this.mensagemSucesso = '';
    this.mensagemErro = '';

    // Valida se todos os campos obrigatórios foram preenchidos
    if (!this.validarFormulario()) {
      this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    // Ativa estado de carregamento
    this.enviando = true;

    // Simula o envio do formulário (em uma aplicação real, seria uma chamada HTTP)
    setTimeout(() => {
      this.formularioEnviado = true;
      this.enviando = false;
      this.mensagemSucesso = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      
      // Limpa o formulário após 3 segundos
      setTimeout(() => {
        this.limparFormulario();
      }, 3000);
    }, 2000);
  }

  /**
   * Valida se o formulário está preenchido corretamente
   */
  validarFormulario(): boolean {
    return !!(
      this.contato.nome.trim() &&
      this.contato.email.trim() &&
      this.contato.assunto.trim() &&
      this.contato.mensagem.trim()
    );
  }

  /**
   * Limpa o formulário
   */
  limparFormulario(): void {
    this.contato = {
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    };
    this.formularioEnviado = false;
    this.mensagemSucesso = '';
    this.mensagemErro = '';
  }

  /**
   * Valida se o email tem formato válido
   */
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
