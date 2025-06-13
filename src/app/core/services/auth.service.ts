import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../models/auth/Login';
import { ResponseLogin, ResponseLogout, ResponseRegistro } from '../models/auth/Response';
import { Registro } from '../models/auth/Registro';
import { TokenResponse } from '../models/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected baseUrl = `${environment.apiUrl}`;

  // Observable que notifica si el usuario está logueado
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  get isLoggedIn$(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  constructor(private http: HttpClient) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    this._isLoggedIn$.next(!!token);
  }

  login(credentials: Login): Observable<ResponseLogin> {
    const formData = new FormData();
    formData.append('NombreUsuario', credentials.NombreUsuario);
    formData.append('Password', credentials.Password);


    return this.http.post<ResponseLogin>(`${this.baseUrl}Usuarios/Login`, formData).pipe(
      tap(res => {
        if (res.result?.token) {
          localStorage.setItem('token', res.result.token);
          this._isLoggedIn$.next(true);
        }
      })
    );
  }

  register(credentials: Registro): Observable<ResponseRegistro> {
    const formData = new FormData();
    formData.append('NombreUsuario', credentials.NombreUsuario);
    formData.append('Password', credentials.Password);
    formData.append('Nombre', credentials.Nombre);
    formData.append('Role', credentials.Role);

    return this.http.post<ResponseRegistro>(`${this.baseUrl}Usuarios/Registro`, formData);
  }

  logout(): void {
  localStorage.removeItem('token'); // Elimina el token
  this._isLoggedIn$.next(false);    // Emite nuevo estado de sesión
  }

  validarToken(token: string): Observable<TokenResponse> {
    return this.http.get<TokenResponse>(`${this.baseUrl}Acceso/ValidarToken?token=${token}`)
  }
}
