import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalcularQuadradoService } from '../../servicos/calcular-quadrado.service';

@Component({
  selector: 'app-quadrado',
  imports: [FormsModule, CommonModule],
  templateUrl: './quadrado.component.html',
  styleUrl: './quadrado.component.css'
})
export class QuadradoComponent {
  mostrarCampo = false;
  numero: number = 0;
  resultado: number | null = null;

  constructor(private calcularQuadradoService: CalcularQuadradoService) {}

  calcularQuadrado() {
    this.resultado = this.calcularQuadradoService.calcularQuadrado(this.numero);
  }
}