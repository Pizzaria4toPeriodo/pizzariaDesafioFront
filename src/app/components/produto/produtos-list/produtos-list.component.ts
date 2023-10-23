import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent {


modalService = inject(NgbModal);

produtosList: Produto [] = [];

abrirModal(content:any){

  this.modalService.open(content, {size: 'lg'})


}


addNaLista(produto: Produto){

  this.produtosList.push(produto);
  this.modalService.dismissAll();
}



}
