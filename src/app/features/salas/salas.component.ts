import { Component } from '@angular/core';

import { SalaService } from '../../core/services/sala.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FiltroSalasPipe } from '../../shared/filtro-salas.pipe';
import { ModalEditarSalaComponent } from './Components/modal-editar-sala.component';
import { SalaCrear } from '../../core/models/App/Sala';

declare var bootstrap: any;
@Component({
  selector: 'app-salas',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule,FormsModule, FiltroSalasPipe, ModalEditarSalaComponent],
  templateUrl: './salas.component.html',
  styleUrl: './salas.component.scss',
})
export class SalasComponent {
  salas: SalaCrear[] = [];
  loading = false;
  salaSeleccionada: SalaCrear | null = null;
  filtro: string = '';
  paginaActual: number = 1;
  itemsPorPagina: number = 5;

  /**
   *
   */
  constructor(private salaService: SalaService) {}

  ngOnInit(): void {
    this.listasSalas();
  }

  listasSalas() {
    this.salaService.getSalas().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.salas = response.result;
          Swal.fire({
            icon: 'success',
            title: 'Salas cargados',
            text: `Se encontraron ${this.salas.length} salas.`,
            timer: 2000,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al cargar',
            text: response.errorMessages.join(', '),
          });
        }
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error de servidor',
          text: 'No se pudo obtener las salas.',
        });
        console.error(err);
      },
    });
  }

  editarSala(sala: SalaCrear){
    this.salaSeleccionada = { ...sala };
    const modal = new bootstrap.Modal(document.getElementById('modalEditarSala')!);
    modal.show();
  }

  eliminarSala(id: number) : void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la sala.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result)=> {
      if (result.isConfirmed) {
              this.loading = true;
              this.salaService.eliminar(id).subscribe({
                next: () => {
                  this.salas = this.salas.filter(p => p.id !== id);
                  this.loading = false;
                  Swal.fire('Eliminado', 'La sala ha sido eliminada.', 'success');
                },
                error: err => {
                  this.loading = false; 
                  console.error('Error al eliminar la sala.', err);
                  Swal.fire('Error', 'No se pudo eliminar la sala.', 'error');
                }
              });
            }
    });
  }

  crearSala(){
    this.salaSeleccionada = {
      id: 0,
      nombre : '',
      estado : 0
    }

    const modal = new bootstrap.Modal(document.getElementById('modalEditarSala')!);
    modal.show();
  }

  actualizarLista(): void {
    this.listasSalas();
  }
}
