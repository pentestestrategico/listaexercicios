import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticado = false
 
   constructor() { }

login(usuario: string, senha: string): boolean {
  if (usuario === 'admin' && senha === '123') {
    this.autenticado = true;
    return true;
  }
  this.autenticado = false;
  return false;
}
isAutenticado(): boolean {
    return this.autenticado;
  }
}

