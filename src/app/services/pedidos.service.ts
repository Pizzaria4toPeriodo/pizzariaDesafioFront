import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private readonly API: string = 'http://localhost:8080/pedidos';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.API}/`);
  }

  create(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.API}/`, pedido);
  }

  getById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.API}/${id}`);
  }

  getByNomeCliente(nomeCliente: string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.API}/cliente/${nomeCliente}`);
  }

  getByNomeFuncionario(nomeFuncionario: string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.API}/funcionario/${nomeFuncionario}`);
  }

  getByDelivery(delivery: boolean): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.API}/delivery/${delivery}`);
  }

  update(id: number, pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.API}/${id}`, pedido);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
