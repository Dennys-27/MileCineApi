import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router,  } from '@angular/router'; // <-- Importa Router
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  constructor(
    private authService: AuthService,
    private router: Router // <-- Inyecta Router aquí
  ) { }

  logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
