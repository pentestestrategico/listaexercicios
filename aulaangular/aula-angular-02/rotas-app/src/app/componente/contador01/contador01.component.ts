import { Component } from '@angular/core';

@Component({
  selector: 'app-contador01',
  imports: [],
  templateUrl: './contador01.component.html',
  styleUrl: './contador01.component.css'
})
export class Contador01Component {

  contador = 0

  addContador(){
    this.contador += 1
    console.log(this.contador)
  }
}
