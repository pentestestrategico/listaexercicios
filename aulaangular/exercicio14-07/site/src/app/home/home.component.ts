
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosServiceService, Produto } from '../service/produtos-service.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Variável do tipo array para armazenar os dados dos produtos
  produtos: Produto[] = [];

  // Injeção do service no construtor
  constructor(private produtosService: ProdutosServiceService) {
    // Obter os dados por meio do método getProdutos()
    this.produtos = this.produtosService.getProdutos();
  }
}
