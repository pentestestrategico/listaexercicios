import { Component } from '@angular/core';
import { ServiceImcService } from '../services/service-imc.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-imc',
  imports: [CommonModule, FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {

  peso:number = 0;
  altura:number = 0;
  resultado:number = 0;
  constructor(private imcServico: ServiceImcService){}

  calcular() {
    this.resultado = this.imcServico.caculateImc(this.peso, this.altura);
  }

}
