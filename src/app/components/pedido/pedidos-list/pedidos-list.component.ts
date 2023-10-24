import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss']
})
export class PedidosListComponent {

  modalService = inject(NgbModal);
  pedidosList: Pedido[] = []; 

  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  addNaLista(produto: Produto) {
  }
}
