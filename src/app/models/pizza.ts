import { Sabor } from "./sabor";

export class Pizza {

    id!: number;
    nomePizza!: string;
    tamanho!: string; // Ajusta el tipo según tu enumeración Tamanho
    categoria!: string; // Ajusta el tipo según tu enumeración Categoria
    saborList!: Sabor[]; // Si los sabores son una lista de objetos, asegúrate de importar y definir la estructura de Sabor
    pedidoList!: any[]; // Ajusta el tipo según la estructura de Pedido
    preco!: number;
  
  }