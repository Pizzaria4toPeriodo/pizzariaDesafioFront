import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent {

  @Output() retorno = new EventEmitter<Pizza>();
  @Input() modoLancamento: boolean = false;

  lista: Pizza[] = [];

  objetoSelecionadoParaEdicao: Pizza = new Pizza();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pizzasService = inject(PizzaService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.pizzasService.listAll().subscribe({
      next: (pizzas) => {
        this.lista = pizzas;
      },
      error: (error) => {
        alert('Tratamiento de error de ejemplo. Observa el error en la consola.');
        console.error(error);
      }
    });
  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Pizza();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  editar(modal: any, pizza: Pizza, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...pizza };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  excluir(pizza: Pizza, indice: number) {
    if (confirm('¿Seguro que deseja excluir a pizza?')) {
      this.pizzasService.delete(pizza.id).subscribe({
        next: () => {
          this.lista.splice(indice, 1); // Elimina el cliente de la lista local
          this.modalService.dismissAll();
        },
        error: (error) => {
          alert('Error para excluir a pizza. Consulte a consola para mais detalles.');
          console.error(error);
        }
      });
    }
  }

  addOuEditarPizza(pizza: Pizza) {
    this.listAll();
    this.modalService.dismissAll();
  }

  lancamento(pizza: Pizza){
    this.retorno.emit(pizza);
  }

}
