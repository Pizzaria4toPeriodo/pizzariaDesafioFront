import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Funcionario } from "../models/funcionario";

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API: string = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.API}/`);
  }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.API}/`, funcionario);
  }

  getById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.API}/${id}`);
  }

  getByNome(nome: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.API}/nome/${nome}`);
  }

  update(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.API}/${id}`, funcionario);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
