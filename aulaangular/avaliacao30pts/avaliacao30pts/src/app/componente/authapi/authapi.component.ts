import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../servicos/auth-api.service';

@Component({
  selector: 'app-authapi',
  imports: [CommonModule],
  templateUrl: './authapi.component.html',
  styleUrl: './authapi.component.css'
})
export class AuthapiComponent implements OnInit {

  lista: any[] = [];
  mostrarCampo: boolean = false;
  carregando: boolean = false;
  
  constructor(private http: AuthApiService) { }

  ngOnInit(): void {
    // Não carrega automaticamente, só quando clicar no botão
  }

  carregarPosts(): void {
    this.carregando = true;
    this.http.getPost().subscribe({
      next: (data) => {
        this.lista = data;
        this.carregando = false;
        console.log('Posts carregados:', this.lista);
      },
      error: (error) => {
        console.error('Erro ao carregar posts:', error);
        this.carregando = false;
      }
    });
  }
}