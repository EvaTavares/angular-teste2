import { Injectable } from '@angular/core';
import { Animal } from '../models/Animal';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL: string = 'http://localhost:3000'

  constructor(private http: HttpClient ) { }

  getAll(): Observable<Animal[]>{
    const url: string = `${this.apiURL}/animals`;
    return this.http.get<Animal[]>(url)
  }

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiURL}/animals/${id}`)
  }

  // verbo http delete, a partir da resposta do front-end
  remove(id: number){
    return this.http.delete<Animal>(`${this.apiURL}/animals/${id}`)
  }
}

// Quem faz o contato com o banco de dados é o SERVICE
// O service é uma camada de abstração entre o componente e a lógica de acesso a dados
