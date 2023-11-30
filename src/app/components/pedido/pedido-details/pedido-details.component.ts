import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Forma_Pagamento } from 'src/app/models/enum/forma_Pagamento';
import { Funcionario } from 'src/app/models/funcionario';
import { Pedido } from 'src/app/models/pedido';
import { Pizza } from 'src/app/models/pizza';
import { Produto } from 'src/app/models/produto';
import { ClientesService } from 'src/app/services/clientes.service';
import { FuncionariosService } from 'src/app/services/funcionario.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedido-details',
  templateUrl: './pedido-details.component.html',
  styleUrls: ['./pedido-details.component.scss']
})
export class PedidoDetailsComponent {

  clientes: Cliente[] = [];
  funcionarios: Funcionario[] = [];

 @Input() pedido: Pedido = new Pedido();
 @Output() retorno = new EventEmitter<Pedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  clienteService = inject(ClientesService);
  funcionariosService = inject(FuncionariosService);
  pedidosService = inject(PedidosService);

  formaPagamentoOptions = Object.values(Forma_Pagamento);


  constructor() {

  }

  ngOnInit() {
    this.getClientes();
    this.getFuncionarios();
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

  getClientes() {
    this.clienteService.listAll().subscribe(
      (response) => {
        this.clientes = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getFuncionarios() {
    this.funcionariosService.listAll().subscribe(
      (response) => {
        this.funcionarios = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  excluir(produto: Produto, indice: number) {

    this.pedido.produtoList.splice(indice,1);
    
  }


  excluirPizza(pizza: Pizza, indice: number) {

    this.pedido.pizzaList.splice(indice,1);
    
  }

  retornoProdutosList(produto: Produto) {

    if (this.pedido.produtoList == null)
      this.pedido.produtoList = [];

    this.pedido.produtoList.push(produto);
    if (this.modalRef) {
      this.modalRef.dismiss();
    }
}

retornoPizzasList(pizza: Pizza) {

  if (this.pedido.pizzaList == null)
    this.pedido.pizzaList = [];

  this.pedido.pizzaList.push(pizza);
  if (this.modalRef) {
    this.modalRef.dismiss();
  }
}


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }



}