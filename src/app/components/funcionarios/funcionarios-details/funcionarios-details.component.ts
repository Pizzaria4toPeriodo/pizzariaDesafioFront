import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionariosService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios-details',
  templateUrl: './funcionarios-details.component.html',
  styleUrls: ['./funcionarios-details.component.scss']
})
export class FuncionariosDetailsComponent {
  @Output() retorno = new EventEmitter<Funcionario>();
  @Input() funcionario: Funcionario = new Funcionario();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  funcionariosService = inject(FuncionariosService);

  salvar() {

    this.funcionariosService.create(this.funcionario).subscribe({
      next: funcionario => { 
        this.retorno.emit(funcionario);
      },
      error: erro => { 
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

}
