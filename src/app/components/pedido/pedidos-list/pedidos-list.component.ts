import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedido';
import { ClientesService } from 'src/app/services/clientes.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss']
})
export class PedidosListComponent {

  lista: Pedido[] = [];

  objetoSelecionadoParaEdicao: Pedido = new Pedido();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pedidosService = inject(PedidosService);
  clientesServices =  inject(ClientesService);
  clientes: any[] = [];

  constructor() {
    this.listAll();
    this.loadClientes();
  }

  listAll() {
    this.pedidosService.listAll().subscribe({
      next: (pedido) => {
        this.lista = pedido;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  loadClientes() {
    this.clientesServices.listAll().subscribe({
      next: (clientes) => {
        this.clientes = clientes;
        console.log(this.clientes)
      },
      error: (error) => {
        console.error('Error al cargar la lista de clientes:', error);
      }
    });
  }

  getClienteById(clienteId: number): any {
    return this.clientes.find((cliente) => cliente.id === clienteId);
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Pedido();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, pedido: Pedido, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...pedido };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarPedido(pedido: Pedido) {
    this.listAll();
    this.modalService.dismissAll();
  }




}
