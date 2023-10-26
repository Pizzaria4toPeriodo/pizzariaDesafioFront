import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Endereco } from 'src/app/models/endereco';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-details',
  templateUrl: './clientes-details.component.html',
  styleUrls: ['./clientes-details.component.scss']
})
export class ClientesDetailsComponent {

 @Input() cliente: Cliente = new Cliente();
 @Output() retorno = new EventEmitter<Cliente>();

  modalService = Inject(NgbModal);
  modalRef!: NgbModalRef;

  clientesService = inject(ClientesService);


  constructor() {

  }

  salvar() {

    this.clientesService.create(this.cliente).subscribe({
      next: cliente => { 
        this.retorno.emit(cliente);
      },
      error: erro => { 
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  excluir(endereco: Endereco, indice: number) {

    this.cliente.enderecoList.splice(indice,1);
    
  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}