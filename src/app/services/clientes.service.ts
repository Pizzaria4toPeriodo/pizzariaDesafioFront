import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API: string = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.API}/`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.API}/`, cliente);
  }

  getById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }

  getByNome(nome: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/nome/${nome}`);
  }

  getByCpf(cpf: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/cpf/${cpf}`);
  }

  update(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${id}`, cliente);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
