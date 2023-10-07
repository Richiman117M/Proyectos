import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './../interface/user';

@Injectable({
  providedIn: 'root',
})
export class TareaService {

  private apiUrl = 'https://6519c266340309952f0cb194.mockapi.io/api/crud/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getItem(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addItem(item: User): Observable<User> {
    console.log(item);
    if (item && Object.keys(item).length === 0) {
      console.error('El usuario está vacío.');
      return of(); // O puedes devolver un observable con un error, dependiendo de tu lógica
    }
    return this.http.post<User>(this.apiUrl, item);
  }

  updateItem(item: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${item.id}`, item);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
