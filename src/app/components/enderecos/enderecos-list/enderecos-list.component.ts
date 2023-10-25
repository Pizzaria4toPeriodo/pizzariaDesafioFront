import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/models/endereco';
import { EnderecosService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-enderecos-list',
  templateUrl: './enderecos-list.component.html',
  styleUrls: ['./enderecos-list.component.scss']
})
export class EnderecosListComponent {

  lista: Endereco[] = [];

  @Output() retorno = new EventEmitter<Endereco>();
  @Input() modoLancamento: boolean = false;

  objetoSelecionadoParaEdicao: Endereco = new Endereco();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  enderecosService = inject(EnderecosService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.enderecosService.listAll().subscribe({
      next: (enderecos) => {
        this.lista = enderecos;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  adicionarEndereco(modal: any) {
    this.objetoSelecionadoParaEdicao = new Endereco();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editarEndereco(modal: any, endereco: Endereco, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...endereco };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  excluirEndereco(endereco: Endereco, indice: number) {
    if (confirm('¿Seguro que deseja excluir este endereço?')) {
      this.enderecosService.delete(endereco.id).subscribe({
        next: () => {
          this.lista.splice(indice, 1); // Elimina el endereço de la lista local
          this.modalService.dismissAll();
        },
        error: (error) => {
          alert('Error ao excluir o endereço. Consulte a consola para mais detalles.');
          console.error(error);
        }
      });
    }
  }

  addOuEditarEndereco(endereco: Endereco) {
    this.listAll();
    this.modalService.dismissAll();
  }

  lancamento(endereco: Endereco){
    this.retorno.emit(endereco);
  }
}
