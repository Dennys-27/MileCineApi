import { Pipe, PipeTransform } from '@angular/core';
import { PeliculaCrear } from '../core/models/App/Pelicula';


@Pipe({
  name: 'filtropeliculas',
  standalone: true
})
export class FiltroPeliculasPipe implements PipeTransform {

  transform(peliculas: PeliculaCrear[], filtro: string): PeliculaCrear[] {
    if (!peliculas || !filtro) return peliculas;

    filtro = filtro.toLowerCase();
    return peliculas.filter(p =>
      p.nombre.toLowerCase().includes(filtro) ||
      p.duracion.toLowerCase().includes(filtro)
    );
      
  }

}
