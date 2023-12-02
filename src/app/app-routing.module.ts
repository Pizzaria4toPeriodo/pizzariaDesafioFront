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
import { ClientesDetailsComponent } from './components/clientes/clientes-details/clientes-details.component';
import { EnderecosDetailsComponent } from './components/enderecos/enderecos-details/enderecos-details.component';
import { FuncionariosListComponent } from './components/funcionarios/funcionarios-list/funcionarios-list.component';
import { FuncionariosDetailsComponent } from './components/funcionarios/funcionarios-details/funcionarios-details.component';
import { PizzasListComponent } from './components/pizzas/pizzas-list/pizzas-list.component';
import { PizzasDetailsComponent } from './components/pizzas/pizzas-details/pizzas-details.component';
import { SaboresListComponent } from './components/sabores/sabores-list/sabores-list.component';
import { SaboresDetailsComponent } from './components/sabores/sabores-details/sabores-details.component';
import { roteGuardGuard } from './guards/rote-guard.guard';

const routes: Routes = [
{path: "", redirectTo: "login", pathMatch: "full"},
{path: "login", component: LoginComponent},
{path: "inicio", component: IndexComponent, canActivate:[roteGuardGuard], children:[
      {path:"pedidos", component: PedidosListComponent},
      {path:"pedidos/details/:id", component: PedidoDetailsComponent},
      {path:"produtos", component: ProdutosListComponent},
      {path:"produtos/details/:id", component: ProdutoDetailsComponent},
      {path:"clientes", component: ClientesListComponent},
      {path:"clientes/details/:id", component: ClientesDetailsComponent},
      {path:"enderecos", component: EnderecosListComponent},
      {path:"enderecos/details/:id", component: EnderecosDetailsComponent},
      {path:"funcionarios", component: FuncionariosListComponent},
      {path:"funcionarios/details/:id", component: FuncionariosDetailsComponent},
      {path:"pizzas", component: PizzasListComponent},
      {path:"pizzas/details/:id", component: PizzasDetailsComponent},
      {path:"sabores", component: SaboresListComponent},
      {path:"sabores/details/:id", component: SaboresDetailsComponent}
    ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
