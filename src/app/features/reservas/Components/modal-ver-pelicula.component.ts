import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTAR ESTO
import { CommonModule } from '@angular/common';
import { ReservaId } from '../../../core/models/App/Reserva';
declare var bootstrap: any;
@Component({
  selector: 'app-modal-ver-pelicula',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ AGREGAR AQUI
  templateUrl: './modal-ver-pelicula.component.html',
})
export class ModalVerPeliculaComponent {
  peliculas: ReservaId[] = [];
  @Input() peliculaSeleccionada: ReservaId | null = null;

  constructor() {}

  /* abrirModalConPelicula(pelicula: ReservaId) {
    this.peliculas = [pelicula]; // lo convierte en arreglo
    const modal = new bootstrap.Modal(
      document.getElementById('modalVerPelicula')!
    );
    modal.show();
  } */

  abrirModalConPeliculas(peliculas: ReservaId[]) {
    console.log(peliculas)
    this.peliculas = peliculas;
    const modal = new bootstrap.Modal(
      document.getElementById('modalVerPelicula')!
    );
    modal.show();
  }
}
