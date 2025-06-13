import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Registro } from '../../core/models/auth/Registro';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  //Crear formulario 
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService : AuthService, private router : Router){
    this.form = this.fb.group({
      NombreUsuario : ['', Validators.required],
      Nombre : ['', Validators.required],
      Password: ['', Validators.required],
      Role: ['', Validators.required]
    });
  }

  register(){
    if (this.form.invalid) {
      return;
    }

    const credentials :  Registro = this.form.value;
    console.log(this.form.value);
    this.authService.register(credentials).subscribe({
      next: () => {
        Swal.fire('Registrado', 'Registro exitoso', 'success');
        this.router.navigate(['/login']);
      },
      error(err) {
          console.error(err);
          Swal.fire('Error', 'Credenciales inválidas', 'error');
      },
    })
  }
}
