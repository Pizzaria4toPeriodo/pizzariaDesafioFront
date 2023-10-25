import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endereco } from "../models/endereco";

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  private readonly API: string = 'http://localhost:8080/enderecos';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(`${this.API}/`);
  }

  create(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(`${this.API}/`, endereco);
  }

  getById(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.API}/${id}`);
  }

  getByNome(nome: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.API}/nome/${nome}`);
  }

  getByCpf(cpf: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.API}/cpf/${cpf}`);
  }

  update(id: number, endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${this.API}/${id}`, endereco);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
