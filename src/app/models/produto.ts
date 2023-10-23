import { Pedido } from "./pedido";

export class Produto {

id!: number;
nomeProduto!: string;
preco!: number;
pedidoList!: Pedido;



constructor(id:number,nomeProduto:string,preco:number,pedidoList:Pedido){

    this.id = id;
    this.nomeProduto = nomeProduto;
    this.preco = preco;
    this.pedidoList = pedidoList
}


}
