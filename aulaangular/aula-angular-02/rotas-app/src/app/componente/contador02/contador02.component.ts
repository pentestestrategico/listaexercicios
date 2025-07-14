import { Component } from '@angular/core';

@Component({
  selector: 'app-contador02',
  imports: [],
  template:`
  <h2>contador imutavel e mutavel</h2>
  <p>Valor: {{contador}}</p>
  <button (click)="incrementar()">incrementar</button>
  <button (click)="decrementar()">decrementar</button>
  
  `,
  styleUrl: './contador02.component.css'
})
export class Contador02Component {

  contador = 0

  incrementar(){
    this.contador = this.contador + 1
    // console.log(this.contador++)

  }

  decrementar(){
this.contador = this.contador - 1
// console.log(this.contador--)
  }
}
