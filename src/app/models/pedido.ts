import { Produto } from './produto'; 
import { Cliente } from './cliente';

export class Pedido {
  id!: number;
  produto!: Produto[];
  cliente!: Cliente;
  delivery!: boolean;
  formaPagamento!: string; 
  total!: number;

  constructor(id: number, produtos: Produto[], cliente: Cliente, delivery: boolean, formaPagamento: string, total: number) {
    this.id = id;
    this.produto = produtos;
    this.cliente = cliente;
    this.delivery = delivery;
    this.formaPagamento = formaPagamento;
    this.total = total;
  }
}
