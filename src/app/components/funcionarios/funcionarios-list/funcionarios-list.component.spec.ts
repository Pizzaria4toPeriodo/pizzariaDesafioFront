import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosListComponent } from './funcionarios-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

describe('FuncionariosListComponent', () => {
  let component: FuncionariosListComponent;
  let fixture: ComponentFixture<FuncionariosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FuncionariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const funcionarioMock: Funcionario = { id: 1, nomeFuncionario: 'kaue', pedidoList: [], username: "kaue12", role: "admin", token: "dasdwe" }; 

    spyOn(component.retorno, 'emit');
    component.lancamento(funcionarioMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(funcionarioMock);
  });
});
