import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent {
  lista: Produto[] = [];

  @Output() retorno = new EventEmitter<Produto>();
  @Input() modoLancamento: boolean = false;


  objetoSelecionadoParaEdicao: Produto = new Produto();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  produtosService = inject(ProdutoService);

  constructor() {

    this.listAll();
    //this.exemploErro();

  }


  listAll() {

    this.produtosService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  adicionar(modal: any) {
    this.objetoSelecionadoParaEdicao = new Produto();
    this.indiceSelecionadoParaEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, produto: Produto, indice: number) {
    this.objetoSelecionadoParaEdicao = Object.assign({}, produto); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarProduto(produto: Produto) {

    this.listAll();

    this.modalService.dismissAll();
  }


  lancamento(produto: Produto){
    this.retorno.emit(produto);
  }
}
