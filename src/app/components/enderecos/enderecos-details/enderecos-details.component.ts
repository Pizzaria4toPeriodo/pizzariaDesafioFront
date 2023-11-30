import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Endereco } from 'src/app/models/endereco';
import { ClientesService } from 'src/app/services/clientes.service';
import { EnderecosService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecos-details',
  templateUrl: './enderecos-details.component.html',
  styleUrls: ['./enderecos-details.component.scss']
})
export class EnderecosDetailsComponent {

  clientes: Cliente[] = [];

 @Input() endereco: Endereco = new Endereco();
 @Output() retorno = new EventEmitter<Endereco>();

  clienteSelecionado: number | undefined;
  clientesDisponibles: Cliente[] = [];
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  clienteService = inject(ClientesService);
  enderecosService = inject(EnderecosService);


  constructor() {
    this.cargarClientesDisponibles();
  }

  ngOnInit() {
    this.getClientes();
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

  cargarClientesDisponibles() {
    this.clienteService.listAll().subscribe({
      next: (clientes) => {
        this.clientesDisponibles = clientes;
      },
      error: (error) => {
        alert('Error al cargar la lista de clientes disponibles. Consulte la consola para más detalles.');
        console.error(error);
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

  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }


}
