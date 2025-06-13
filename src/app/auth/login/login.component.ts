import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Login } from '../../core/models/auth/Login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //Crear formulario
  form: FormGroup;

  /**
   *
   */
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      NombreUsuario: ['', Validators.required],
      Password: ['', Validators.required]
    });

  }


  //Crear Login
  login() {
    if (this.form.invalid) {
      return;
    }

    const credentials: Login = this.form.value;
    console.log(this.form.value);  // << aquí revisa el contenido
    this.authService.login(credentials).subscribe({
      next: () => {
        Swal.fire('Bienvenido', 'Inicio de sesión exitoso', 'success');
        this.router.navigate(['/dashboard']);
      },
      error(err) {
        console.error(err);
        Swal.fire('Error', 'Credenciales inválidas', 'error');
      },
    });
  }
}
