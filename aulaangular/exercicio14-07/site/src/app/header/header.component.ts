import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SobreComponent } from '../pages/sobre/sobre.component'; 
import { ServicoComponent } from '../pages/servico/servico.component';
import { ContatoComponent } from '../pages/contato/contato.component'; 




@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
