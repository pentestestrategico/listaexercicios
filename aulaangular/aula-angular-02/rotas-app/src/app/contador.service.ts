import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  constructor() { }

  private valor = 0
  
  getValor():number{
    return this.valor
  }
  incrementar (){
    this.valor++
  }
  decrementar(){
    this.valor--
  }
  zerar(){
    this.valor = 0
  }
}
