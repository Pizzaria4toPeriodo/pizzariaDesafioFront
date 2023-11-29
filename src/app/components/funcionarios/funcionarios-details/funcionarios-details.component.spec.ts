import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { FuncionariosDetailsComponent } from './funcionarios-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('FuncionariosDetailsComponent', () => {
  let component: FuncionariosDetailsComponent;
  let fixture: ComponentFixture<FuncionariosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FuncionariosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {    
    let funcionario: Funcionario = new Funcionario();
    funcionario.id = 1;
    funcionario.nomeFuncionario = "kaue";
    funcionario.pedidoList = [];
    funcionario.username = "kaue123";
    funcionario.role = "admin";
    funcionario.token = "asdf";
    component.funcionario = funcionario;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomeFuncionario"]'));
    expect(elemento.nativeElement.ngModel).toEqual("kaue");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomeFuncionario"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de @Output() retorno', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  beforeEach(() => {
    let funcionario = new Funcionario();
    funcionario.id = 1;
    funcionario.nomeFuncionario = "kaue";
    funcionario.pedidoList = [];
    funcionario.username = "kaue123";
    funcionario.role = "admin";
    funcionario.token = "asdf";
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(funcionario));
    spyOn(httpSpy, 'put').and.returnValue(of(funcionario));

    fixture.detectChanges();
  });

});
