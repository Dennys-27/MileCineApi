import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTAR ESTO
import { CommonModule } from '@angular/common';
import { PeliculaCrear } from '../../../core/models/App/Pelicula';

import { PeliculaService } from '../../../core/services/pelicula.service';
import Swal from 'sweetalert2';
declare var bootstrap: any;
@Component({
  selector: 'app-modal-editar-pelicula',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ AGREGAR AQUI
  templateUrl: './modal-editar-pelicula.component.html',
})
export class ModalEditarPeliculaComponent {
  @Input() peliculaSeleccionado: PeliculaCrear | null = null;
  @Output() onGuardar = new EventEmitter<void>();
  modalLabel = '';
  peliculaEditado: PeliculaCrear = {
    id: 0,
    nombre: '',
    duracion: ''
    ,
      estado : 0
  };
  constructor(private peliculaService: PeliculaService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['peliculaSeleccionado'] && this.peliculaSeleccionado) {
      this.peliculaEditado = { ...this.peliculaSeleccionado };

      this.modalLabel =
        this.peliculaEditado.id && this.peliculaEditado.id !== 0
          ? 'Editar pelicula'
          : 'Crear pelicula';
    }
  }

  /* guardar(): void {
        if (this.peliculaEditado.id === 0) {
            // CREAR
            console.log('Objeto que se enviará a crear:', this.peliculaEditado); // <-- Aquí
            this.peliculaService.crear(this.peliculaEditado).subscribe(() => {
                const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarPelicula')!);
                modal?.hide();
                this.onGuardar.emit();
            });
        } else {
            // EDITAR
            this.peliculaService.editar(this.peliculaEditado.id, this.peliculaEditado).subscribe(() => {
                const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarPelicula')!);
                modal?.hide();
                this.onGuardar.emit();
            });
        }
    } */

  guardar(): void {
    if (this.peliculaEditado.id === 0) {
      // CREAR
      console.log('Objeto que se enviará a crear:', this.peliculaEditado);
      this.peliculaService.crear(this.peliculaEditado).subscribe(() => {
        const modal = bootstrap.Modal.getInstance(
          document.getElementById('modalEditarPelicula')!
        );
        modal?.hide();

        // ✅ Alerta de creación exitosa
        Swal.fire({
          icon: 'success',
          title: 'Película creada',
          text: 'La película se ha guardado correctamente.',
          timer: 2000,
          showConfirmButton: false,
        });

        this.onGuardar.emit();
      });
    } else {
      // EDITAR
      this.peliculaService
        .editar(this.peliculaEditado.id, this.peliculaEditado)
        .subscribe(() => {
          const modal = bootstrap.Modal.getInstance(
            document.getElementById('modalEditarPelicula')!
          );
          modal?.hide();

          // ✅ Alerta de edición exitosa
          Swal.fire({
            icon: 'success',
            title: 'Película actualizada',
            text: 'La película ha sido actualizada correctamente.',
            timer: 2000,
            showConfirmButton: false,
          });

          this.onGuardar.emit();
        });
    }
  }
}
