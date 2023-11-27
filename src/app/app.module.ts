import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './layout/index/index/index.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { LoginComponent } from './sistema/login/login.component'
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';
import { ProdutosListComponent } from './components/produto/produtos-list/produtos-list.component';
import { PedidosListComponent } from './components/pedido/pedidos-list/pedidos-list.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { PedidoDetailsComponent } from './components/pedido/pedido-details/pedido-details.component';
import { ClientesDetailsComponent } from './components/clientes/clientes-details/clientes-details.component';
import { EnderecosListComponent } from './components/enderecos/enderecos-list/enderecos-list.component';
import { EnderecosDetailsComponent } from './components/enderecos/enderecos-details/enderecos-details.component';
import { FuncionariosListComponent } from './components/funcionarios/funcionarios-list/funcionarios-list.component';
import { FuncionariosDetailsComponent } from './components/funcionarios/funcionarios-details/funcionarios-details.component';
import { PizzasListComponent } from './components/pizzas/pizzas-list/pizzas-list.component';
import { PizzasDetailsComponent } from './components/pizzas/pizzas-details/pizzas-details.component';
import { SaboresListComponent } from './components/sabores/sabores-list/sabores-list.component';
import { SaboresDetailsComponent } from './components/sabores/sabores-details/sabores-details.component';
import { LoginService } from './services/login.service';
import { httpInterceptorProviders } from './interceptors/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProdutoDetailsComponent,
    PedidoDetailsComponent,
    PedidosListComponent,
    ProdutosListComponent,
    ClientesListComponent,
    ClientesDetailsComponent,
    EnderecosListComponent,
    EnderecosDetailsComponent,
    FuncionariosListComponent,
    FuncionariosDetailsComponent,
    PizzasListComponent,
    PizzasDetailsComponent,
    SaboresListComponent,
    SaboresDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
