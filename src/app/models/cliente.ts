import { Endereco } from "./endereco";
import { Pedido } from "./pedido";

export class Cliente {
    id!: number;
    nomeCliente!: string;
    cpf!: string;
    telefone!: string;
    enderecoList!: Endereco[];
    pedidoList!: Pedido[]; 

}
