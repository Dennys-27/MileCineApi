export interface Reserva {
  idSala: number;
  peliculasId: number[];
  fecha_publicacion: string; 
  fecha_fin: string;         
  estado: number;
}

export interface ReservaGet{
    id: number,
    idSala : number,
    nombre : string,
    fecha_publicacion : string,
    fecha_fin : string,
    estado : number,
    fecha_creacion: string,
    peliculas_total: number
}



export interface ReservaId{
    reservaId: number,
    reserva : null ,
    nombre : string,
    duracion : string
}