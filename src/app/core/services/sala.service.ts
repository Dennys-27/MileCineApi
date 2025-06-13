import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../models/App/ApiResponse';
import { Sala, SalaCrear } from '../models/App/Sala';



@Injectable({
  providedIn: 'root'
})
export class SalaService {
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

  getSalas(): Observable<ApiResponse<Sala[]>> {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No hay token para enviar en la petición');
      // Retornamos un Observable vacío o un error observable para evitar que se quede colgado
      return throwError(() => new Error('No hay token para enviar en la petición'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Retornamos el Observable, NO hacemos subscribe aquí
    return this.http.get<ApiResponse<Sala[]>>(`${this.baseUrl}Sala/`, { headers });
  }

  crear(Sala : SalaCrear): Observable<SalaCrear> {
    return this.http.post<SalaCrear>(`${this.baseUrl}Sala/`, Sala);
  }

  editar(id: number, Sala : SalaCrear): Observable<Sala> {
    return this.http.patch<Sala>(`${this.baseUrl}Sala/${id}`, Sala);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}Sala/${id}`);
  }
}
