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

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a)=> animal.name !== a.name)
  }

  getAll(): Observable<Animal[]>{
    const url: string = `${this.apiURL}/animals`;
    return this.http.get<Animal[]>(url)
  }
}
