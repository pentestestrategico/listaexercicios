import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuadradoComponent } from "./componente/quadrado/quadrado.component";
import { AuthapiComponent } from "./componente/authapi/authapi.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuadradoComponent, AuthapiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avaliacao30pts';
}
