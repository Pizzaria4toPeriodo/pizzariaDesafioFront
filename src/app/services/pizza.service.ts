import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pizza } from "../models/pizza";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private readonly API: string = 'http://localhost:8080/pizzas';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${this.API}/`);
  }

  create(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`${this.API}/`, pizza);
  }

  getById(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.API}/${id}`);
  }

  getByNome(nome: string): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.API}/nome/${nome}`);
  }

  getByTamanho(tamanho: string): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.API}/tamanho/${tamanho}`);
  }

  getByCategoria(categoria: string): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.API}/categoria/${categoria}`);
  }

  update(id: number, pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.API}/${id}`, pizza);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
