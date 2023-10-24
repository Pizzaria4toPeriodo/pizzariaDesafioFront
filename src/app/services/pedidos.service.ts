import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido";


@Injectable({
    providedIn: 'root'
  })
  export class PedidosService {
    
    API: string = 'http://localhost:8080/pedidos';
    http = inject(HttpClient);
  
    constructor() { }

    listAll(): Observable<Pedido[]> {
        return this.http.get<Pedido[]>(`${this.API}/`);
      }
    
      create(pedido: Pedido): Observable<Pedido> {
        return this.http.post<Pedido>(`${this.API}/`, pedido);
      }
    
      getById(id: number): Observable<Pedido> {
        return this.http.get<Pedido>(`${this.API}/${id}`);
      }

      exemploErro(): Observable<Pedido[]> {
        return this.http.get<Pedido[]>(this.API + '/erro');
      }
    
  }