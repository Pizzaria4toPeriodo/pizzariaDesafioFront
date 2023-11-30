import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosListComponent } from './enderecos-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Endereco } from 'src/app/models/endereco';

describe('EnderecosListComponent', () => {
  let component: EnderecosListComponent;
  let fixture: ComponentFixture<EnderecosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecosListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EnderecosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const enderecoMock: Endereco = { id: 1, rua: 'av brasil', numero: 555, cliente: [] }; 

    spyOn(component.retorno, 'emit');
    component.lancamento(enderecoMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(enderecoMock);
  });
});
