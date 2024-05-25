import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'http://localhost:8081/inteligencianegocios/';

  constructor(private http: HttpClient) { }

  getEncuestasSatisfaccion(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'encuestas_satisfaccion');
  }

  getLlamadas(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'llamadas');
  }

  getVolumenVentas(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'volumen_ventas');
  }
}
