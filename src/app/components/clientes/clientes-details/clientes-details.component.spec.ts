import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ClientesDetailsComponent } from './clientes-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Endereco } from 'src/app/models/endereco';

describe('ClientesDetailsComponent', () => {
  let component: ClientesDetailsComponent;
  let fixture: ComponentFixture<ClientesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ClientesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {    
    let cliente: Cliente = new Cliente();
    cliente.id = 1;
    cliente.nomeCliente = "marcelo";
    cliente.cpf = "54068030936";
    cliente.telefone = "54934539432";
    cliente.enderecoList = [];
    cliente.pedidoList = [];
    component.cliente = cliente;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cliente"]'));
    expect(elemento.nativeElement.ngModel).toEqual("marcelo");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cliente"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 2 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cpf"]'));
    expect(elemento.nativeElement.ngModel).toEqual("54068030936");
  });

  it('Teste no null de @Input 2 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="cpf"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 3 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="telefone"]'));
    expect(elemento.nativeElement.ngModel).toEqual("54934539432");
  });

  it('Teste no null de @Input 3 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="telefone"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de @Output() retorno', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  it('excluir um endereco da lista', () => {
    const endereco1: Endereco = { id: 1, rua: 'av brasil', numero: 555, cliente: [] };
    const endereco2: Endereco = { id: 2, rua: 'salvador', numero: 323, cliente: [] };
    const endereco3: Endereco = { id: 3, rua: 'av das americas', numero: 232, cliente: [] };

    component.cliente = { id: 1, nomeCliente: "marcelo", cpf: "54068030936", telefone: "54934539432", enderecoList: [endereco1, endereco2, endereco3], pedidoList: [] };

    expect(component.cliente.enderecoList.length).toBe(3);

    component.excluir(endereco2, 1);

    expect(component.cliente.enderecoList.length).toBe(2);
    expect(component.cliente.enderecoList).toEqual([endereco1, endereco3]);
  });


  beforeEach(() => {
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nomeCliente = "marcelo";
    cliente.cpf = "54068030936";
    cliente.telefone = "54934539432";
    cliente.enderecoList = [];
    cliente.pedidoList = [];
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(cliente));
    spyOn(httpSpy, 'put').and.returnValue(of(cliente));

    fixture.detectChanges();
  });
});
