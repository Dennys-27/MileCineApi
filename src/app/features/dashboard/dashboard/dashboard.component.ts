import { Component } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  totalSalas: number = 0;
  salasDisponibles: number = 0;
  totalPeliculas: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getTotalSalas().subscribe(res => {
      this.totalSalas = res.result[0]?.totaldisponibles || 0;
    });

    this.dashboardService.getTotalSalasDisponibles().subscribe(res => {
      this.salasDisponibles = res.result[0]?.total_salas || 0;
    });

    this.dashboardService.getTotalPeliculas().subscribe(res => {
      this.totalPeliculas = res.result[0]?.totalpeliculas || 0;
    });
  }
}
