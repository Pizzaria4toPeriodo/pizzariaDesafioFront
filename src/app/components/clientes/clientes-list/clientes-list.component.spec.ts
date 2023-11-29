import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ClientesListComponent } from './clientes-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { of } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

describe('ClientesListComponent', () => {
  let component: ClientesListComponent;
  let fixture: ComponentFixture<ClientesListComponent>;
  let modalService: NgbModal;
  let clientesService: ClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: NgbModal, useValue: { open: jasmine.createSpy(), dismissAll: jasmine.createSpy() } },
        { provide: ClientesService, useValue: { listAll: () => of([]), delete: () => of(null) } }
      ]
    });
    fixture = TestBed.createComponent(ClientesListComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    clientesService = TestBed.inject(ClientesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const clienteMock: Cliente = { id: 1, nomeCliente: "marcelo", cpf: "95760611488", telefone: "54923459234", enderecoList: [], pedidoList: [] }; 

    spyOn(component.retorno, 'emit');
    component.lancamento(clienteMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(clienteMock);
  });

  it('confirmacao excluir cliente', fakeAsync(() => {
    const cliente: Cliente = { id: 1, nomeCliente: 'Test', cpf: '12345678901', telefone: '987654321', enderecoList: [], pedidoList: [] };
    component.lista = [cliente];
    spyOn(window, 'confirm').and.returnValue(true);

    component.excluir(cliente, 0);
    tick();

    expect(window.confirm).toHaveBeenCalled();
    expect(component.lista.length).toBe(0);
    expect(modalService.dismissAll).toHaveBeenCalled();
  }));

});
