import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImcComponent } from "./app/imc/imc.component";
import { QuadradoComponent } from "./app/quadrado/quadrado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImcComponent, QuadradoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-service';
}
