import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://jsonplaceholder.typicode.com/users'; // URL da API
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
 
}
