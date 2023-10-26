import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-sabores-list',
  templateUrl: './sabores-list.component.html',
  styleUrls: ['./sabores-list.component.scss']
})
export class SaboresListComponent {

  @Output() retorno = new EventEmitter<Sabor>();
  @Input() modoLancamento: boolean = false;

  lista: Sabor[] = [];

  objetoSelecionadoParaEdicao: Sabor = new Sabor();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  saboresService = inject(SaborService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.saboresService.listAll().subscribe({
      next: (sabores) => {
        this.lista = sabores;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Sabor();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, sabor: Sabor, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...sabor };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  excluir(sabor: Sabor, indice: number) {
    if (confirm('¿Seguro que deseja excluir este sabor?')) {
      this.saboresService.delete(sabor.id).subscribe({
        next: () => {
          this.lista.splice(indice, 1);
          this.modalService.dismissAll();
        },
        error: (error) => {
          alert('Error ao excluir o sabor. Consulte la consola para más detalles.');
          console.error(error);
        }
      });
    }
  }

  addOuEditarSabor(sabor: Sabor) {
    this.listAll();
    this.modalService.dismissAll();
  }

  lancamento(sabor: Sabor){
    this.retorno.emit(sabor);
  }

}
