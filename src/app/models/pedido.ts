import { Produto } from './produto'; 
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Pizza } from './pizza';
import { Forma_Pagamento } from './enum/forma_Pagamento';


export class Pedido {
  id!: number;
  produtoList!: Produto[];
  pizzaList!: Pizza[];
  cliente!: Cliente[];
  funcionario!: Funcionario[];
  delivery!: boolean;
  formaPagamento!: Forma_Pagamento;
  criadoEm!: string; 
  total!: number;

}
