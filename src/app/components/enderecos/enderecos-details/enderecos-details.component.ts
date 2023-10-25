import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Endereco } from 'src/app/models/endereco';
import { EnderecosService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecos-details',
  templateUrl: './enderecos-details.component.html',
  styleUrls: ['./enderecos-details.component.scss']
})
export class EnderecosDetailsComponent {

 @Input() endereco: Endereco = new Endereco();
 @Output() retorno = new EventEmitter<Endereco>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  enderecosService = inject(EnderecosService);


  constructor() {

  }

  salvar() {

    this.enderecosService.create(this.endereco).subscribe({
      next: endereco => { 
        this.retorno.emit(endereco);
      },
      error: erro => { 
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });


  }

  excluir(cliente: Cliente, indice: number) {

    this.endereco.clienteList.splice(indice,1);
    
  }

  retornoClienteList(cliente: Cliente) {

    if (this.endereco.clienteList == null)
      this.endereco.clienteList = [];

    this.endereco.clienteList.push(cliente);
    this.modalRef.dismiss();
  }

  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }


}
