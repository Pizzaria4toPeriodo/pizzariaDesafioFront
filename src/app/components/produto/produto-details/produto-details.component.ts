import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss']
})
export class ProdutoDetailsComponent {

  @Input() produto: Produto = new Produto();
  @Output() retorno = new EventEmitter<Produto>();
 
   modalService = inject(NgbModal);
   modalRef!: NgbModalRef;
 
   produtosService = inject(ProdutoService);
 
 
   constructor() {
 
   }
 
   salvar() {
    this.produtosService.create(this.produto).subscribe({
      next: produto => { // QUANDO DÁ CERTO
        this.retorno.emit(produto);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
    }
}