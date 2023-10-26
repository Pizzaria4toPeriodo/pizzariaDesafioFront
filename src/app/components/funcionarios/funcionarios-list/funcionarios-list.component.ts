import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionariosService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios-list',
  templateUrl: './funcionarios-list.component.html',
  styleUrls: ['./funcionarios-list.component.scss']
})
export class FuncionariosListComponent {

  @Output() retorno = new EventEmitter<Funcionario>();
  @Input() modoLancamento: boolean = false;

  lista: Funcionario[] = [];

  objetoSelecionadoParaEdicao: Funcionario = new Funcionario();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  funcionariosService = inject(FuncionariosService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.funcionariosService.listAll().subscribe({
      next: (funcionarios) => {
        this.lista = funcionarios;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Funcionario();
    this.indiceSelecionadoParaEdicao = -1;
    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, funcionario: Funcionario, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...funcionario };
    this.indiceSelecionadoParaEdicao = indice;
    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  excluir(funcionario: Funcionario, indice: number) {
    if (confirm('¿Seguro que desea eliminar este funcionario?')) {
      this.funcionariosService.delete(funcionario.id).subscribe({
        next: () => {
          this.lista.splice(indice, 1); // Elimina el funcionario de la lista local
          this.modalService.dismissAll();
        },
        error: (error) => {
          alert('Error al eliminar el funcionario. Consulte la consola para más detalles.');
          console.error(error);
        }
      });
    }
  }

  addOuEditarFuncionario(funcionario: Funcionario) {
    this.listAll();
    this.modalService.dismissAll();
  }

  lancamento(funcionario: Funcionario){
    this.retorno.emit(funcionario);
  }
}
