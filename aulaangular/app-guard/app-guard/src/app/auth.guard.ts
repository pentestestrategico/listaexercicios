import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';



export const authGuard: CanActivateFn = () => {
  const  auth = inject(AuthService); // injeta na variavel auth o serviço AuthService
  // injeta o serviço Router para redirecionar o usuário  
  const router = inject(Router);

  if (!auth.isAutenticado()) {
    // Redireciona para a página de login se não estiver autenticado
    router.navigate(['/login']);
    return false;
  }
  
  return true;
};
