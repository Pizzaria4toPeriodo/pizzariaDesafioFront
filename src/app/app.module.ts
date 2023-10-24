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
import { ClienteListComponent } from './app/clientes/cliente-list/cliente-list.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProdutoDetailsComponent,
    ProdutosListComponent,
    ClienteListComponent,
    ClientesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
