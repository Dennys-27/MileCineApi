import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';


import { PeliculasComponent } from './features/productos/peliculas/peliculas.component';
import { SalasComponent } from './features/salas/salas.component';
import { ReservasComponent } from './features/reservas/reservas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    { path: 'taquilla', component: ReservasComponent },
      { path: 'peliculas', component: PeliculasComponent },
      { path: 'salas', component: SalasComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
