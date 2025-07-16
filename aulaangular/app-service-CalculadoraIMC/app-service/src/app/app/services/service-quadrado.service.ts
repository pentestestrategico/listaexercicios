import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceQuadradoService {

  constructor() { }

  calcularQuadrado(valor:number){
    return valor * valor;
  }
}
