import { Pipe, PipeTransform } from '@angular/core';
import { SalaCrear } from '../core/models/App/Sala';



@Pipe({
  name: 'filtrosalas',
  standalone: true
})
export class FiltroSalasPipe implements PipeTransform {

  transform(salas: SalaCrear[], filtro: string): SalaCrear[] {
    if (!salas || !filtro) return salas;

    filtro = filtro.toLowerCase();
    return salas.filter(p =>
      p.nombre.toLowerCase().includes(filtro) 
    );
      
  }

}
