import { Component } from '@angular/core';
import { ProdutosComponent } from "../pages/produtos/produtos.component";

@Component({
  selector: 'app-home',
  imports: [ProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
