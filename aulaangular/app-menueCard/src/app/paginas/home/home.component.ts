import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  fotos = [
    {
      nome:'Maria das Graças',
      imagem:'/img/maria.jpg'
    },
    {
      nome:'Jonas Ribeiro',
      imagem:'/img/jonas.jpg'
    },
    {
      nome:'Adelson Meneses',
      imagem:'/img/adelso.jpg'
    },
    {
      nome:'milena braga',
      imagem:'/img/milena.jpg'
    },
    {
      nome:'Marcos Farias',
      imagem:'/img/marcos.jpg'
    }


  ]

}
