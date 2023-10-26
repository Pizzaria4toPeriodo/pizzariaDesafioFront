import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sabor } from "../models/sabor";

@Injectable({
  providedIn: 'root'
})
export class SaborService {

  private readonly API: string = 'http://localhost:8080/sabores';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(`${this.API}/`);
  }

  create(sabor: Sabor): Observable<Sabor> {
    return this.http.post<Sabor>(`${this.API}/`, sabor);
  }

  getById(id: number): Observable<Sabor> {
    return this.http.get<Sabor>(`${this.API}/${id}`);
  }

  getByNome(nome: string): Observable<Sabor> {
    return this.http.get<Sabor>(`${this.API}/nome/${nome}`);
  }

  getByCategoria(categoria: string): Observable<Sabor> {
    return this.http.get<Sabor>(`${this.API}/categoria/${categoria}`);
  }

  update(id: number, sabor: Sabor): Observable<Sabor> {
    return this.http.put<Sabor>(`${this.API}/${id}`, sabor);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
