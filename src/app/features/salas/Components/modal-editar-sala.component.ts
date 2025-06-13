import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTAR ESTO
import { CommonModule } from '@angular/common';
import { SalaCrear } from '../../../core/models/App/Sala';


import Swal from 'sweetalert2';
import { SalaService } from '../../../core/services/sala.service';
declare var bootstrap: any;
@Component({
  selector: 'app-modal-editar-sala',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ AGREGAR AQUI
  templateUrl: './modal-editar-sala.component.html',
})
export class ModalEditarSalaComponent {
  @Input() salaSeleccionado: SalaCrear | null = null;
  @Output() onGuardar = new EventEmitter<void>();
  modalLabel = '';
  SalaEditado: SalaCrear = {
    id: 0,
    nombre: '',
    estado : 0
  };
  constructor(private SalaService: SalaService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['salaSeleccionado'] && this.salaSeleccionado) {
      this.SalaEditado = { ...this.salaSeleccionado };

      this.modalLabel =
        this.SalaEditado.id && this.SalaEditado.id !== 0
          ? 'Editar Sala'
          : 'Crear Sala';
    }
  }

  /* guardar(): void {
        if (this.SalaEditado.id === 0) {
            // CREAR
            console.log('Objeto que se enviará a crear:', this.SalaEditado); // <-- Aquí
            this.SalaService.crear(this.SalaEditado).subscribe(() => {
                const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarSala')!);
                modal?.hide();
                this.onGuardar.emit();
            });
        } else {
            // EDITAR
            this.SalaService.editar(this.SalaEditado.id, this.SalaEditado).subscribe(() => {
                const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarSala')!);
                modal?.hide();
                this.onGuardar.emit();
            });
        }
    } */

  guardar(): void {
    if (this.SalaEditado.id === 0) {
      // CREAR
      console.log('Objeto que se enviará a crear:', this.SalaEditado);
      this.SalaService.crear(this.SalaEditado).subscribe(() => {
        const modal = bootstrap.Modal.getInstance(
          document.getElementById('modalEditarSala')!
        );
        modal?.hide();

        // ✅ Alerta de creación exitosa
        Swal.fire({
          icon: 'success',
          title: 'Sala creada',
          text: 'La Sala se ha guardado correctamente.',
          timer: 2000,
          showConfirmButton: false,
        });

        this.onGuardar.emit();
      });
    } else {
      // EDITAR
      this.SalaService
        .editar(this.SalaEditado.id, this.SalaEditado)
        .subscribe(() => {
          const modal = bootstrap.Modal.getInstance(
            document.getElementById('modalEditarSala')!
          );
          modal?.hide();

          // ✅ Alerta de edición exitosa
          Swal.fire({
            icon: 'success',
            title: 'Sala actualizada',
            text: 'La Sala ha sido actualizada correctamente.',
            timer: 2000,
            showConfirmButton: false,
          });

          this.onGuardar.emit();
        });
    }
  }
}
