import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosListComponent } from './pedidos-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Pedido } from 'src/app/models/pedido';
import { ClientesService } from 'src/app/services/clientes.service';
import { of } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Forma_Pagamento } from 'src/app/models/enum/forma_Pagamento';

describe('PedidosListComponent', () => {
  let component: PedidosListComponent;
  let fixture: ComponentFixture<PedidosListComponent>;
  let clientesService: ClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosListComponent],
      imports: [HttpClientTestingModule],
      providers: [ClientesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PedidosListComponent);
    component = fixture.componentInstance;
    clientesService = TestBed.inject(ClientesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const pedidoMock: Pedido = { id: 1, produtoList: [], pizzaList: [], cliente: [], funcionario: [], delivery: true, formaPagamento: Forma_Pagamento.DINHEIRO, criadoEm: "28/11/2023", total: 10}; 

    spyOn(component.retorno, 'emit');
    component.lancamento(pedidoMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(pedidoMock);
  });

  
  it('debería devolver el cliente correcto por ID', () => {
    const clientesMock: Cliente[] = [
      { id: 1, nomeCliente: 'Cliente1', cpf: '11111111111', telefone: '123456789', enderecoList: [], pedidoList: [] },
      { id: 2, nomeCliente: 'Cliente2', cpf: '22222222222', telefone: '987654321', enderecoList: [], pedidoList: [] },
      { id: 3, nomeCliente: 'Cliente3', cpf: '33333333333', telefone: '555555555', enderecoList: [], pedidoList: [] },
    ];
  
    // Configura el espía antes de crear la instancia del componente
    spyOn(clientesService, 'listAll').and.returnValue(of(clientesMock));
  
    fixture = TestBed.createComponent(PedidosListComponent);
    component = fixture.componentInstance;
  
    const clienteId = 2;
    const clienteEncontrado = component.getClienteById(clienteId);
  
    expect(clienteEncontrado).toEqual(clientesMock[1]);
  });

  it('debería devolver undefined si el cliente no se encuentra por ID', () => {
    const clientesMock: Cliente[] = [
      { id: 1, nomeCliente: 'Cliente1', cpf: '11111111111', telefone: '123456789', enderecoList: [], pedidoList: [] },
      { id: 2, nomeCliente: 'Cliente2', cpf: '22222222222', telefone: '987654321', enderecoList: [], pedidoList: [] },
      { id: 3, nomeCliente: 'Cliente3', cpf: '33333333333', telefone: '555555555', enderecoList: [], pedidoList: [] },
    ];

    spyOn(clientesService, 'listAll').and.returnValue(of(clientesMock));

    const clienteId = 4; // Supongamos que no hay un cliente con ID 4
    const clienteEncontrado = component.getClienteById(clienteId);

    expect(clienteEncontrado).toBeUndefined();
  });
});
