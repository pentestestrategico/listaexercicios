import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  /**
   * Método para realizar logout
   */
  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
