import { Component } from '@angular/core';

import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule } from '@angular/forms';

import { PeliculaService } from '../../../core/services/pelicula.service';
import { ModalEditarPeliculaComponent } from '../Components/modal-editar-pelicula.component';
import { FiltroPeliculasPipe } from '../../../shared/filtro-peliculas.pipe';
import { PeliculaCrear } from '../../../core/models/App/Pelicula';
// ✅ Mueve esto FUERA de la clase:
declare var bootstrap: any;

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, ModalEditarPeliculaComponent, NgxPaginationModule, FiltroPeliculasPipe, FormsModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent {
  Peliculas: PeliculaCrear[] = [];
  loading = false;
  peliculaSeleccionado: PeliculaCrear | null = null;
  filtro: string = '';
  paginaActual: number = 1;
  itemsPorPagina: number = 5;

  constructor(private peliculaservice: PeliculaService) { }

  ngOnInit(): void {
    this.listarPeliculas();
  }

  listarPeliculas() {
    this.peliculaservice.getPeliculas().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.Peliculas = response.result;
          Swal.fire({
            icon: 'success',
            title: 'peliculas cargados',
            text: `Se encontraron ${this.Peliculas.length} peliculas.`,
            timer: 2000,
            showConfirmButton: false
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al cargar',
            text: response.errorMessages.join(', ')
          });
        }
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error de servidor',
          text: 'No se pudo obtener los peliculas.'
        });
        console.error(err);
      }
    });
  }

  editarPeliculas(Peliculas: PeliculaCrear) {
    
    this.peliculaSeleccionado = { ...Peliculas };
    const modal = new bootstrap.Modal(document.getElementById('modalEditarPelicula')!);
    modal.show();
  }

  eliminarPeliculas(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el Peliculas.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.peliculaservice.eliminar(id).subscribe({
          next: () => {
            this.Peliculas = this.Peliculas.filter(p => p.id !== id);
            this.loading = false;
            Swal.fire('Eliminado', 'El Peliculas ha sido eliminado.', 'success');
          },
          error: err => {
            this.loading = false;
            console.error('Error al eliminar el Peliculas', err);
            Swal.fire('Error', 'No se pudo eliminar el Peliculas.', 'error');
          }
        });
      }
    });
  }


  crearPeliculas() {
    this.peliculaSeleccionado = {
      id : 0,
      nombre : '',
      duracion : ''
      ,
      estado : 0
    };

    const modal = new bootstrap.Modal(document.getElementById('modalEditarPelicula')!);
    modal.show();
  }
  actualizarLista(): void {
    this.listarPeliculas();
  }
}
