import { Pedido } from "./pedido";

export class Funcionario {

  id!: number;
  nomeFuncionario!: string;
  pedidoList!: Pedido[];      
  username!: string;
  password!: string;
  role!: string;
  token!: string;

}
