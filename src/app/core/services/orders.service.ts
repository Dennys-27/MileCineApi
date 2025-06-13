import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Orders } from "../models/App/Orders";
import { ApiResponse } from "../models/App/ApiResponse";

@Injectable({
    providedIn: 'root'
})


export class OrdersService {
    protected baseUrl = `${environment.apiUrl}`;
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

    get isLoggedIn$(): Observable<boolean> {
        return this._isLoggedIn$.asObservable();
    }

    constructor(private http: HttpClient) {
        const token = localStorage.getItem('token');
        this._isLoggedIn$.next(!!token);
    }

    /* crearorder(orders : Orders) : Observable<Orders>{
        return this.http.post<Orders>(`${this.baseUrl}Orders/`, orders);
    } */
    crearorder(orders: Orders): Observable<ApiResponse<Orders>> {
        return this.http.post<ApiResponse<Orders>>(`${this.baseUrl}Orders/`, orders);
    }
}