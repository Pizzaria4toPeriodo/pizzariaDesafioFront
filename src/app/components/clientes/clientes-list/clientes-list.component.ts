import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent {

  lista: Cliente[] = [];

  objetoSelecionadoParaEdicao: Cliente = new Cliente();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  clientesService = inject(ClientesService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.clientesService.listAll().subscribe({
      next: (clientes) => {
        this.lista = clientes;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Cliente();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, cliente: Cliente, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...cliente };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  addOuEditarCliente(cliente: Cliente) {
    this.listAll();
    this.modalService.dismissAll();
  }

}
