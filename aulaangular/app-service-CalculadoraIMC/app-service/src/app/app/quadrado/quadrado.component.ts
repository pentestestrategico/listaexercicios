import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceQuadradoService } from '../services/service-quadrado.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quadrado',
  imports: [CommonModule, FormsModule],
  templateUrl: './quadrado.component.html',
  styleUrl: './quadrado.component.css'
})
export class QuadradoComponent {
numero:number = 0
  resultado:number = 0
  constructor(private quadradoService: ServiceQuadradoService){}
  calcular(){
    this.resultado = this.quadradoService.calcularQuadrado(this.numero)
  }
}
