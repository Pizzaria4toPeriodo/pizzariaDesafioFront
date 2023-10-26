import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizzas-details',
  templateUrl: './pizzas-details.component.html',
  styleUrls: ['./pizzas-details.component.scss']
})
export class PizzasDetailsComponent {
 @Input() pizza: Pizza = new Pizza();
 @Output() retorno = new EventEmitter<Pizza>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pizzasService = inject(PizzaService);


  constructor() {

  }

  salvar() {

    this.pizzasService.create(this.pizza).subscribe({
      next: pizza => { 
        this.retorno.emit(pizza);
      },
      error: erro => { 
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }
}
