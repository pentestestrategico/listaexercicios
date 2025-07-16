import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  erro = ''


  constructor(private auth: AuthService, private rotas: Router) { }

  entrar() {
    if (this.auth.login(this.usuario, this.senha)) {
      this.rotas.navigate(['/home']);
      
    } else {
      this.erro = 'Usuário ou senha inválidos';
    }
  }

}
