import { Cliente } from "./cliente";

export class Endereco {
    id!: number;
    rua!: string;
    numero!: number;
    cliente!: Cliente[];
  }