import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BehaviorSubject para manter o estado de autenticação
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  
  // Observable público para outros componentes se inscreverem
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Verifica se existe um token de autenticação no localStorage ao inicializar
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  /**
   * Valida as credenciais do usuário
   * @param login - Nome de usuário digitado
   * @param senha - Senha digitada
   * @returns boolean - true se as credenciais estão corretas
   */
  validarCredenciais(login: string, senha: string): boolean {
    // Valida se as credenciais correspondem ao usuário padrão
    return login === 'adm' && senha === '123';
  }

  /**
   * Realiza o login do usuário
   * @param login - Nome de usuário
   * @param senha - Senha
   * @returns boolean - true se o login foi bem-sucedido
   */
  login(login: string, senha: string): boolean {
    // Verifica se as credenciais são válidas
    if (this.validarCredenciais(login, senha)) {
      // Salva um token de autenticação no localStorage
      localStorage.setItem('authToken', 'authenticated');
      // Atualiza o estado de autenticação
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  /**
   * Realiza o logout do usuário
   */
  logout(): void {
    // Remove o token de autenticação do localStorage
    localStorage.removeItem('authToken');
    // Atualiza o estado de autenticação para false
    this.isAuthenticatedSubject.next(false);
  }

  /**
   * Verifica se o usuário está autenticado
   * @returns boolean - true se o usuário está autenticado
   */
  isAuthenticated(): boolean {
    // Retorna o valor atual do estado de autenticação
    return this.isAuthenticatedSubject.value;
  }
}
