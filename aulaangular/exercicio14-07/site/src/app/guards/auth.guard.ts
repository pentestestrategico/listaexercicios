import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

/**
 * Guard de rota que verifica se o usuário está autenticado
 * @param route - Informações da rota ativa
 * @param state - Estado atual do router
 * @returns boolean - true se pode acessar a rota, false caso contrário
 */
export const authGuard: CanActivateFn = (route, state) => {
  // Injeta o serviço de autenticação
  const authService = inject(AuthService);
  // Injeta o router para navegação
  const router = inject(Router);
  
  // Verifica se o usuário está autenticado
  if (authService.isAuthenticated()) {
    // Permite o acesso à rota
    return true;
  } else {
    // Redireciona para a página de login se não estiver autenticado
    router.navigate(['/painel']);
    return false;
  }
};
