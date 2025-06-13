import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Sala } from '../../core/models/App/Sala';
import { Pelicula } from '../../core/models/App/Pelicula';
import { SalaService } from '../../core/services/sala.service';
import { PeliculaService } from '../../core/services/pelicula.service';
import { ReservaService } from '../../core/services/reserva.service';
import { ReservaGet, ReservaId } from '../../core/models/App/Reserva';
import { NgxPaginationModule } from 'ngx-pagination';

import Swal from 'sweetalert2';
import { ModalVerPeliculaComponent } from './Components/modal-ver-pelicula.component';
import { FiltroReservasPipe } from '../../shared/filtro-reserva.pipe';
declare var bootstrap: any;
@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalVerPeliculaComponent,
    FiltroReservasPipe,
  ],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss',
})
export class ReservasComponent {
  salas: Sala[] = [];
  peliculas: Pelicula[] = [];
  peliculasReserva: ReservaId[] = [];
  reserva: ReservaGet[] = [];
  reservaForm!: FormGroup;
  reservaSeleccionada: ReservaId | null = null;
  filtro: string = '';
  paginaActual: number = 1;
  itemsPorPagina: number = 5;
  @ViewChild(ModalVerPeliculaComponent)
  modalVerPelicula!: ModalVerPeliculaComponent;
  /**
   *
   */
  constructor(
    private salaService: SalaService,
    private peliculaService: PeliculaService,
    private reservaService: ReservaService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.obtenerSalas();
    this.obtenerPeliculas();
    this.listaReserva();
  }
  listaReserva() {
    this.reservaService.getSReserva().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.reserva = response.result;
          Swal.fire({
            icon: 'success',
            title: 'Reservas cargados',
            text: `Se encontraron ${this.reserva.length} reservas.`,
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
          text: 'No se pudo obtener las reservas.',
        });
        console.error(err);
      },
    });
  }

  verPeliculas(reservaId: number) {
    this.reservaService.verPeliculas(reservaId).subscribe((response) => {
      console.log('Películas recibidas:', response.result);
      this.modalVerPelicula.abrirModalConPeliculas(response.result);
    });
  }

  crearFormulario() {
    this.reservaForm = this.fb.group({
      idSala: [''],
      peliculasId: [[]],
      fecha_publicacion: [''],
      fecha_fin: [''],
      estado: [1],
    });
  }

  obtenerSalas() {
    this.salaService.getSalas().subscribe((response) => {
      if (response.isSuccess) {
        this.salas = response.result;
      }
    });
  }

  obtenerPeliculas() {
    this.peliculaService.getPeliculas().subscribe((response) => {
      if (response.isSuccess) {
        this.peliculas = response.result;
      }
    });
  }

  /* guardarReserva() {
    if (this.reservaForm.valid) {
      this.reservaService
        .crearReserva(this.reservaForm.value)
        .subscribe((resp) => {
          console.log('Reserva guardada:', resp);
        });
    }
  } */

  guardarReserva() {
    if (this.reservaForm.valid) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas guardar esta reserva?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('Enviando reserva:', this.reservaForm.value);

          this.reservaService.crearReserva(this.reservaForm.value).subscribe({
            next: (resp) => {
              console.log('Reserva guardada:', resp);

              
              this.reservaForm.reset({
                idSala: '',
                peliculasId: [],
                fecha_publicacion: '',
                fecha_fin: '',
                estado: 1,
                ReservasId: '',
              });

              
              this.listaReserva();

              
              Swal.fire({
                title: '¡Guardado!',
                text: 'La reserva se guardó correctamente.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
              });
            },
            error: (err) => {
              console.error('Error al guardar:', err);
              Swal.fire(
                'Error',
                'Hubo un problema al guardar la reserva.',
                'error'
              );
            },
          });
        }
      });
    }
  }
}
