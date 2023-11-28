import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListComponent } from './pedidos-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Pedido } from 'src/app/models/pedido';

describe('PedidosListComponent', () => {
  let component: PedidosListComponent;
  let fixture: ComponentFixture<PedidosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const pedidoMock: Pedido = { id: 1, produtoList: [], pizzaList: [], cliente: [], funcionario: [], delivery: true, formaPagamento: "dinheiro", criadoEm: "28/11/2023", total: 10}; 

    spyOn(component.retorno, 'emit');
    component.lancamento(pedidoMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(pedidoMock);
  });
});
