import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Dados da API</h2>
  <h3>Dados dos usuarios da API</h3>
  <ul>
    <li *ngFor="let nome of nomes">{{ nome }}</li></ul>`,
  styleUrl: './dados.component.css',})

export class DadosComponent implements OnInit {

  dados: any;
  nomes: string[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // Aqui você pode fazer uma chamada HTTP para obter dados da API
    // Exemplo: this.http.get('https://api.exemplo.com/dados').subscribe(data => console.log(data));
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(resultado => {
      console.log(resultado);
      this.dados = (resultado)

      this.nomes = resultado.map(x => x.name)
      console.log(this.nomes);
    });
  }

}