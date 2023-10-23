import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss']
})
export class ProdutoDetailsComponent {

router = inject(ActivatedRoute)

produto: Produto = new Produto(0,"",0,Pedido);

@Output() retorno = new EventEmitter<Produto>();



constructor(){

  let id = this.router.snapshot.paramMap.get('id');


}


salvar(){

  this.retorno.emit(this.produto);
}





}
