import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularQuadradoService {

  constructor() { }

  calcularQuadrado(numero: number): number {
    return numero * numero;
  }
}
