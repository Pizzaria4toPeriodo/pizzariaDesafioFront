import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EnderecosDetailsComponent } from './enderecos-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Endereco } from 'src/app/models/endereco';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

describe('EnderecosDetailsComponent', () => {
  let component: EnderecosDetailsComponent;
  let fixture: ComponentFixture<EnderecosDetailsComponent>;
  let httpClient: HttpClient;
  let clientesService: ClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecosDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(EnderecosDetailsComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    clientesService = TestBed.inject(ClientesService);
    fixture.detectChanges();
  });

  beforeEach(() => {    
    let endereco: Endereco = new Endereco();
    endereco.id = 1;
    endereco.rua = "av brasil";
    endereco.numero = 555;
    endereco.clienteList = [];
    component.endereco = endereco;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="rua"]'));
    expect(elemento.nativeElement.ngModel).toEqual("av brasil");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="rua"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 2 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="numero"]'));
    expect(elemento.nativeElement.ngModel).toEqual(555);
  });

  it('Teste no null de @Input 2 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="numero"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de @Output() retorno', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  it('excluir um cliente da lista', () => {
    const cliente1: Cliente = { id: 1, nomeCliente: 'pedro', cpf: "63891424981", telefone: "54543249876", enderecoList: [], pedidoList: [] };
    const cliente2: Cliente = { id: 2, nomeCliente: 'juan', cpf: "68138790733", telefone: "55435689234", enderecoList: [], pedidoList: [] };
    const cliente3: Cliente = { id: 3, nomeCliente: 'nicolas', cpf: "50779241045", telefone: "52456783243", enderecoList: [], pedidoList: [] };

    component.endereco = { id: 1, rua: "av brasil", numero: 555, clienteList: [cliente1, cliente2, cliente3] };

    expect(component.endereco.clienteList.length).toBe(3);

    component.excluir(cliente2, 1);

    expect(component.endereco.clienteList.length).toBe(2);
    expect(component.endereco.clienteList).toEqual([cliente1, cliente3]);
  });

  it('should load available clients', fakeAsync(() => {
    const clientesMock: Cliente[] = [
      { id: 1, nomeCliente: 'Cliente1', cpf: '12345678901', telefone: '987654321', enderecoList: [], pedidoList: [] },
      { id: 2, nomeCliente: 'Cliente2', cpf: '23456789012', telefone: '876543210', enderecoList: [], pedidoList: [] }
    ];

    // Configurar el servicio para devolver datos de prueba
    spyOn(clientesService, 'listAll').and.returnValue(of(clientesMock));

    // Llamar a la función que estamos probando
    component.cargarClientesDisponibles();
    tick();

    // Verificar que la propiedad clientesDisponibles se haya actualizado correctamente
    expect(component.clientesDisponibles.length).toBe(2);
    expect(component.clientesDisponibles).toEqual(clientesMock);
  }));

  beforeEach(() => {
    let endereco = new Endereco();
    endereco.id = 1;
    endereco.rua = "av brasil";
    endereco.numero = 555;
    endereco.clienteList = [];
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(endereco));
    spyOn(httpSpy, 'put').and.returnValue(of(endereco));

    fixture.detectChanges();
  });
});
