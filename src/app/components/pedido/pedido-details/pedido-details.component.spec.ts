import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { PedidoDetailsComponent } from './pedido-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { By } from '@angular/platform-browser';
import { Produto } from 'src/app/models/produto';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Funcionario } from 'src/app/models/funcionario';
import { Pizza } from 'src/app/models/pizza';

describe('PedidoDetailsComponent', () => {
  let component: PedidoDetailsComponent;
  let fixture: ComponentFixture<PedidoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {    
    let pedido: Pedido = new Pedido();
    pedido.id = 1;
    pedido.produtoList = [];
    pedido.pizzaList = [];
    pedido.cliente = [];
    pedido.funcionario = [];
    pedido.delivery = true;
    pedido.formaPagamento = "dinheiro";
    pedido.criadoEm = "26/06/2023";
    pedido.total = 10;
    component.pedido = pedido;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="total"]'));
    expect(elemento.nativeElement.ngModel).toEqual(10);
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="total"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 2 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="delivery"]'));
    expect(elemento.nativeElement.ngModel).toEqual(true);
  });

  it('Teste no null de @Input 2- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="delivery"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 3 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="formaPagamento"]'));
    expect(elemento.nativeElement.ngModel).toEqual("dinheiro");
  });

  it('Teste no null de @Input 3- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="formaPagamento"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de @Output() retorno', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  it('excluir um produto da lista', () => {
    const produto1: Produto = { id: 1, nomeProduto: 'coca cola', preco: 3 };
    const produto2: Produto = { id: 2, nomeProduto: 'agua', preco: 2 };
    const produto3: Produto = { id: 3, nomeProduto: 'sprite', preco: 3 };

    component.pedido = { id: 1, produtoList: [produto1, produto2, produto3], pizzaList: [], cliente: [], funcionario: [], delivery: true, formaPagamento: "dinheiro", criadoEm: "26/06/2023", total: 10 };

    expect(component.pedido.produtoList.length).toBe(3);

    component.excluir(produto2, 1);

    expect(component.pedido.produtoList.length).toBe(2);
    expect(component.pedido.produtoList).toEqual([produto1, produto3]);
  });

  it('excluir um cliente da lista', () => {
    const cliente1: Cliente = { id: 1, nomeCliente: 'pedro', cpf: "63891424981", telefone: "54543249876", enderecoList: [], pedidoList: [] };
    const cliente2: Cliente = { id: 2, nomeCliente: 'juan', cpf: "68138790733", telefone: "55435689234", enderecoList: [], pedidoList: [] };
    const cliente3: Cliente = { id: 3, nomeCliente: 'nicolas', cpf: "50779241045", telefone: "52456783243", enderecoList: [], pedidoList: [] };

    component.pedido = { id: 1, produtoList: [], pizzaList: [], cliente: [cliente1, cliente2, cliente3], funcionario: [], delivery: true, formaPagamento: "dinheiro", criadoEm: "26/06/2023", total: 10 };

    expect(component.pedido.cliente.length).toBe(3);

    component.excluirCliente(cliente2, 1);

    expect(component.pedido.cliente.length).toBe(2);
    expect(component.pedido.cliente).toEqual([cliente1, cliente3]);
  });

  it('excluir um funcionario da lista', () => {
    const funcionario1: Funcionario = { id: 1, nomeFuncionario: 'kaue', pedidoList: [], username: "kaue12", role: "admin", token: "dasdwe" };
    const funcionario2: Funcionario = { id: 2, nomeFuncionario: 'matias', pedidoList: [], username: "matute", role: "empleado", token: "asadsad" };
    const funcionario3: Funcionario = { id: 3, nomeFuncionario: 'roberto', pedidoList: [], username: "robert", role: "admin", token: "pasdosp" };

    component.pedido = { id: 1, produtoList: [], pizzaList: [], cliente: [], funcionario: [funcionario1, funcionario2, funcionario3], delivery: true, formaPagamento: "dinheiro", criadoEm: "26/06/2023", total: 10 };

    expect(component.pedido.funcionario.length).toBe(3);

    component.excluirFuncionario(funcionario2, 1);

    expect(component.pedido.funcionario.length).toBe(2);
    expect(component.pedido.funcionario).toEqual([funcionario1, funcionario3]);
  });

  it('excluir uma pizza da lista', () => {
    const pizza1: Pizza = { id: 1, nomePizza: 'frango', tamanho: "grande", categoria: "salgada", saborList: [], pedidoList: [], preco: 30 };
    const pizza2: Pizza = { id: 2, nomePizza: 'abacaxi', tamanho: "media", categoria: "dolce", saborList: [], pedidoList: [], preco: 15};
    const pizza3: Pizza = { id: 3, nomePizza: 'chocolate', tamanho: "pequena", categoria: "dolce", saborList: [], pedidoList: [], preco: 20 };

    component.pedido = { id: 1, produtoList: [], pizzaList: [pizza1, pizza2, pizza3], cliente: [], funcionario: [], delivery: true, formaPagamento: "dinheiro", criadoEm: "26/06/2023", total: 10 };

    expect(component.pedido.pizzaList.length).toBe(3);

    component.excluirPizza(pizza2, 1);

    expect(component.pedido.pizzaList.length).toBe(2);
    expect(component.pedido.pizzaList).toEqual([pizza1, pizza3]);
  });

  it('componente depois do retornoProdutosList', () => {
    const produto: Produto = { id: 2, nomeProduto: 'coca cola', preco: 3  };

    component.retornoProdutosList(produto);

    expect(component.pedido.produtoList).toContain(produto);
  });

  it('componente depois do retornoClienteList', () => {
    const cliente: Cliente = { id: 1, nomeCliente: 'pedro', cpf: "63891424981", telefone: "54543249876", enderecoList: [], pedidoList: [] };

    component.retornoClientesList(cliente);

    expect(component.pedido.cliente).toContain(cliente);
  });

  it('componente depois do retornoFuncionariosList', () => {
    const funcionario: Funcionario = { id: 1, nomeFuncionario: 'kaue', pedidoList: [], username: "kaue12", role: "admin", token: "dasdwe" };

    component.retornoFuncionariosList(funcionario);

    expect(component.pedido.funcionario).toContain(funcionario);
  });

  it('componente depois do retornoPizzaList', () => {
    const pizza: Pizza = { id: 1, nomePizza: 'frango', tamanho: "grande", categoria: "salgada", saborList: [], pedidoList: [], preco: 30 };

    component.retornoPizzasList(pizza);

    expect(component.pedido.pizzaList).toContain(pizza);
  });

  beforeEach(() => {
    let pedido = new Pedido();
    pedido.id = 1;
    pedido.produtoList = [];
    pedido.pizzaList = [];
    pedido.cliente = [];
    pedido.funcionario = [];
    pedido.delivery = true;
    pedido.formaPagamento = "dinheiro";
    pedido.criadoEm = "26/06/2023";
    pedido.total = 10;
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(pedido));
    spyOn(httpSpy, 'put').and.returnValue(of(pedido));

    fixture.detectChanges();
  });
});
