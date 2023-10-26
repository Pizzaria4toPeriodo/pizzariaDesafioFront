import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';

@Component({
  selector: 'app-sabores-details',
  templateUrl: './sabores-details.component.html',
  styleUrls: ['./sabores-details.component.scss']
})
export class SaboresDetailsComponent {

 @Input() sabor: Sabor = new Sabor();
 @Output() retorno = new EventEmitter<Sabor>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  saboresService = inject(SaborService);


  constructor() {

  }

  salvar() {

    this.saboresService.create(this.sabor).subscribe({
      next: sabor => { 
        this.retorno.emit(sabor);
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
