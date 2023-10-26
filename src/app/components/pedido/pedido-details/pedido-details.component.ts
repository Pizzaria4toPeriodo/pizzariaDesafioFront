import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Funcionario } from 'src/app/models/funcionario';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedido-details',
  templateUrl: './pedido-details.component.html',
  styleUrls: ['./pedido-details.component.scss']
})
export class PedidoDetailsComponent {

 @Input() pedido: Pedido = new Pedido();
 @Output() retorno = new EventEmitter<Pedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidosService = inject(PedidosService);


  constructor() {

  }

  salvar() {
      this.pedidosService.create(this.pedido).subscribe({
      next: pedido => { 
        this.retorno.emit(pedido);
      },
      error: erro => { 
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  excluir(produto: Produto, indice: number) {

    this.pedido.produtoList.splice(indice,1);
    
  }

  excluirCliente(cliente: Cliente, indice: number) {

    this.pedido.cliente.splice(indice,1);
    
  }

  excluirFuncionario(funcionario: Funcionario, indice: number) {

    this.pedido.funcionario.splice(indice,1);
    
  }

  retornoProdutosList(produto: Produto) {

    if (this.pedido.produtoList == null)
      this.pedido.produtoList = [];

    this.pedido.produtoList.push(produto);
    this.modalRef.dismiss();
}

  retornoClientesList(cliente: Cliente) {

  if (this.pedido.cliente == null)
    this.pedido.cliente = [];

  this.pedido.cliente.push(cliente);
  this.modalRef.dismiss();
}

retornoFuncionariosList(funcionario: Funcionario) {

  if (this.pedido.funcionario == null)
    this.pedido.funcionario = [];

  this.pedido.funcionario.push(funcionario);
  this.modalRef.dismiss();
}


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }



}