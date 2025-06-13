import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import {
  Numero_Total_Peliculas,
  Numero_Total_Salas,
  Numero_Total_Salas_Disponibles,
} from '../models/App/Dashboard';
import { ApiResponse } from '../models/App/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  protected baseUrl = `${environment.apiUrl}`;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
  }

  //listar

  getTotalSalas(): Observable<ApiResponse<Numero_Total_Salas[]>> {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No hay token para enviar en la petición');
      return throwError(
        () => new Error('No hay token para enviar en la petición')
      );
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<ApiResponse<Numero_Total_Salas[]>>(
      `${this.baseUrl}Dashboard/DashboardTotalSalas`,
      { headers }
    );
  }

  getTotalSalasDisponibles(): Observable<
    ApiResponse<Numero_Total_Salas_Disponibles[]>
  > {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No hay token para enviar en la petición');
      return throwError(
        () => new Error('No hay token para enviar en la petición')
      );
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<ApiResponse<Numero_Total_Salas_Disponibles[]>>(
      `${this.baseUrl}Dashboard/TotalSalasDisponibles`,
      { headers }
    );
  }

  getTotalPeliculas(): Observable<ApiResponse<Numero_Total_Peliculas[]>> {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No hay token para enviar en la petición');
      return throwError(
        () => new Error('No hay token para enviar en la petición')
      );
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<ApiResponse<Numero_Total_Peliculas[]>>(
      `${this.baseUrl}Dashboard/DashboardTotalPeliculas`,
      { headers }
    );
  }
}
