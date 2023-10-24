import { Produto } from './produto'; 
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
import { Pizza } from './pizza';


export class Pedido {
  id!: number;
  produtoList!: Produto[];
  pizzaList!: Pizza[];
  cliente!: Cliente;
  funcionario!: Funcionario;
  delivery!: boolean;
  formaPagamento!: string;
  criadoEm!: string; // Puedes ajustar el tipo según cómo se almacena en el back-end
  total!: number;

}
