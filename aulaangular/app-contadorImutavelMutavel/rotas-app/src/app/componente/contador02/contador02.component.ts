import { Component } from '@angular/core';

@Component({
  selector: 'app-contador02',
  imports: [],
  templateUrl: './contador02.component.html',
  styleUrl: './contador02.component.css'
})
export class Contador02Component {

  contador = 0
  isIncrementing = false
  isDecrementing = false

  incrementar(){
    // Abordagem Mutável: modifica diretamente o valor
    this.contador = this.contador + 1
    
    // Animação visual
    this.isIncrementing = true
    setTimeout(() => this.isIncrementing = false, 600)
    
    // Log para demonstrar a diferença
    console.log('Mutável - Incremento:', this.contador)
  }

  decrementar(){
    // Abordagem Mutável: modifica diretamente o valor
    this.contador = this.contador - 1
    
    // Animação visual
    this.isDecrementing = true
    setTimeout(() => this.isDecrementing = false, 600)
    
    // Log para demonstrar a diferença
    console.log('Mutável - Decremento:', this.contador)
  }
}
