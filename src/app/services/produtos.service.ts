import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API: string = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API}/`);
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.API}/`, produto);
  }

  getById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.API}/${id}`);
  }

  getByNomeProduto(nomeProduto: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.API}/nome/${nomeProduto}`);
  }

  update(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.API}/${id}`, produto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
