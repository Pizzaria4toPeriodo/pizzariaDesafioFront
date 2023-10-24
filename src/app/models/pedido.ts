import { Produto } from './produto'; 
import { Cliente } from './cliente';

export class Pedido {
  id!: number;
  produto!: Produto[];
  cliente!: Cliente;
  delivery!: boolean;
  formaPagamento!: string; 
  total!: number;

}
