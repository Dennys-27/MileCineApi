import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { ApiResponse } from "../models/App/ApiResponse";
import { Pelicula, PeliculaCrear } from "../models/App/Pelicula";



@Injectable({
    providedIn: 'root'
})

export class PeliculaService{
    protected baseUrl = `${environment.apiUrl}`;
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

    get isLoggedIn$(): Observable<boolean>{
        return this._isLoggedIn$.asObservable();
    }

    constructor(private http: HttpClient){
        const token = localStorage.getItem('token');
        this._isLoggedIn$.next(!!token);
    }

    //listar
    getPeliculas(): Observable<ApiResponse<Pelicula[]>>{
        const token = localStorage.getItem('token');
        if (!token) {
            return throwError(() => new Error('No hay token para enviar en la petición'));
        }
        
        const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`
            });

        return this.http.get<ApiResponse<Pelicula[]>>(`${this.baseUrl}Pelicula`, { headers });
    }

    crear(Pelicula : PeliculaCrear) : Observable<PeliculaCrear>{
        return this.http.post<PeliculaCrear>(`${this.baseUrl}Pelicula/`, Pelicula);
    }

    editar(id : number, Pelicula : PeliculaCrear) : Observable<Pelicula>{
        return this.http.patch<Pelicula>(`${this.baseUrl}Pelicula/${id}`, Pelicula);
    }

    eliminar(id: number) : Observable<void>{
        return this.http.delete<void>(`${this.baseUrl}Pelicula/${id}`);
    }
}