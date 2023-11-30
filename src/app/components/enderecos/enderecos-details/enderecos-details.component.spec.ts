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
    endereco.cliente = [];
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

  it('cliente list disponivel', fakeAsync(() => {
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
    endereco.cliente = [];
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(endereco));
    spyOn(httpSpy, 'put').and.returnValue(of(endereco));

    fixture.detectChanges();
  });
});
