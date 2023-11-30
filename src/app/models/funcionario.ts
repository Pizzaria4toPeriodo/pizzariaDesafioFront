import { Pedido } from "./pedido";

export class Funcionario {

  id!: number;
  nomeFuncionario!: string;
  pedidoList!: Pedido[];      
  username!: string;
  role!: string;
  token!: string;

}
