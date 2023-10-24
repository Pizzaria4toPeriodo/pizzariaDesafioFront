import { Cliente } from "./cliente";

export class Endereco {
    id!: number;
    rua!: string;
    numero!: number;
    cliente!: Cliente; // Asegúrate de que el modelo Cliente esté definido
  }