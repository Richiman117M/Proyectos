import { Casa } from './../interface/casa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CasasServiceService {
  
  private apiUrl = 'https://6519c266340309952f0cb194.mockapi.io/api/crud/homes';
  constructor(private http: HttpClient) { }

  obtenerCasas(): Observable<Casa[]> {
    return this.http.get<Casa[]>(this.apiUrl);
  }

  obtenerCasaPorId(id: string): Observable<Casa> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Casa>(url);
  }
  
}
