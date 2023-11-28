import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasListComponent } from './pizzas-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';

describe('PizzasListComponent', () => {
  let component: PizzasListComponent;
  let fixture: ComponentFixture<PizzasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PizzasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const pizzaMock: Pizza = { id: 1, nomePizza: 'frango', tamanho: "grande", categoria: "salgado", saborList: [], pedidoList: [], preco: 10}; 

    spyOn(component.retorno, 'emit');
    component.lancamento(pizzaMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(pizzaMock);
  });
});
