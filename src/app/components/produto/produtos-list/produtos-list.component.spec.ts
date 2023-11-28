import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListComponent } from './produtos-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produto } from 'src/app/models/produto';

describe('ProdutosListComponent', () => {
  let component: ProdutosListComponent;
  let fixture: ComponentFixture<ProdutosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProdutosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('metodo lancamento', () => {
    const productoMock: Produto = { id: 1, nomeProduto: 'coca cola', preco: 10 }; 

    spyOn(component.retorno, 'emit');
    component.lancamento(productoMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(productoMock);
  });
});
