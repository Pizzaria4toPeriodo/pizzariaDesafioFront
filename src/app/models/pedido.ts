import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";
import { Produto } from "./produto";

export class Pedido {

id!: number;
produtos!: Produto[];
cliente!: Cliente;
funcionario!: Funcionario;
delivery: boolean = false;





}
