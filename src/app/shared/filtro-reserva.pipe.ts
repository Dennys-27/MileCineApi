import { Pipe, PipeTransform } from '@angular/core';

import { ReservaGet, ReservaId } from '../core/models/App/Reserva';


@Pipe({
  name: 'filtroReservas',
  standalone: true
})
export class FiltroReservasPipe implements PipeTransform {

  transform(reservas: ReservaGet[], filtro: string): ReservaGet[] {
    if (!reservas || !filtro) return reservas;

    filtro = filtro.toLowerCase();
    return reservas.filter(p =>
      p.nombre.toLowerCase().includes(filtro)
    );
      
  }

}
