import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../models/App/ApiResponse';

import { Reserva, ReservaGet, ReservaId } from '../models/App/Reserva';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  protected baseUrl = `${environment.apiUrl}`;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
  }

  crearReserva(Reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(`${this.baseUrl}Reserva/`, Reserva);
  }

  getSReserva(): Observable<ApiResponse<ReservaGet[]>> {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No hay token para enviar en la petición');
      // Retornamos un Observable vacío o un error observable para evitar que se quede colgado
      return throwError(
        () => new Error('No hay token para enviar en la petición')
      );
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Retornamos el Observable, NO hacemos subscribe aquí
    return this.http.get<ApiResponse<ReservaGet[]>>(`${this.baseUrl}Reserva/`, {
      headers,
    });
  }

  /* verPeliculas(reservaId: number): Observable<ReservaId[]> {
    return this.http.get<ReservaId[]>(`${this.baseUrl}Reserva/${reservaId}`);
  } */

  verPeliculas(reservaId: number): Observable<{ result: ReservaId[] }> {
    return this.http.get<{ result: ReservaId[] }>(
      `${this.baseUrl}Reserva/${reservaId}`
    );
  }
}
