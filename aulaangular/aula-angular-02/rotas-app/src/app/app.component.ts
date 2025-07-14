import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador01Component } from "./componente/contador01/contador01.component";
import { Contador02Component } from './componente/contador02/contador02.component';
import { Contador04Component } from "./componente/contador04/contador04.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador01Component, Contador02Component, Contador04Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas-app';
}
