//OnINit/ProdutoService/Roter/RoterModule/CommonModule
import { Component, inject, OnInit } from '@angular/core';
import { ProdutoServiceService } from '../../services/produto.service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto.model'


@Component({
  selector: 'app-produto-lista',
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})

//private servico = inject(ProdutoServiceService)
export class ProdutoListaComponent implements OnInit {

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoServiceService, private router: Router){}

  ngOnInit(): void {
    this.carregarProdutos()
  }

  // carregarProdutos(){
  //   this.produtoService.listar().subscribe( (produto:Produto) => {
  //     return this.produtos = [produto];
  //     console.log(this.produtos)
  //   } )
  // }
  carregarProdutos(){
    this.produtoService.listar().subscribe( (res) =>{
      this.produtos = Array.isArray(res) ? res : [res];
    } )}
    
  editar(id: number){
    this.router.navigate(['/editar', id])
  }
  excluir(id: number){
    this.produtoService.excluir(id).subscribe(() => {
      this.carregarProdutos()
    })
  }
  novo(){
    this.router.navigate(['/novo'])
  }

  
}