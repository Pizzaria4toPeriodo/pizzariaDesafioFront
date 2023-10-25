import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PedidosListComponent } from './components/pedido/pedidos-list/pedidos-list.component';
import { PedidoDetailsComponent } from './components/pedido/pedido-details/pedido-details.component';
import { ProdutosListComponent } from './components/produto/produtos-list/produtos-list.component';
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { EnderecosListComponent } from './components/enderecos/enderecos-list/enderecos-list.component';

const routes: Routes = [
{path: "", redirectTo: "login", pathMatch: "full"},
{path: "login", component: LoginComponent},
{path: "inicio", component: IndexComponent, children:[
      {path:"pedidos", component: PedidosListComponent},
      {path:"pedidos/details/:id", component: PedidoDetailsComponent},
      {path:"produtos", component: ProdutosListComponent},
      {path:"produtos/details/:id", component: ProdutoDetailsComponent},
      {path:"clientes", component: ClientesListComponent},
      {path:"enderecos", component: EnderecosListComponent}
    ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
