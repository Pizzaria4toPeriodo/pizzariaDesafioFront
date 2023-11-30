import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PizzasListComponent } from './pizzas-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PizzaService } from 'src/app/services/pizza.service';
import { of } from 'rxjs';

describe('PizzasListComponent', () => {
  let component: PizzasListComponent;
  let fixture: ComponentFixture<PizzasListComponent>;
  let modalService: NgbModal;
  let pizzaService: PizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: NgbModal, useValue: { open: jasmine.createSpy(), dismissAll: jasmine.createSpy() } },
        { provide: PizzaService, useValue: { listAll: () => of([]), delete: () => of(null) } }
      ]
    });
    fixture = TestBed.createComponent(PizzasListComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    pizzaService = TestBed.inject(PizzaService);
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

  it('confirmacao excluir pizzas', fakeAsync(() => {
    const pizza: Pizza = { id: 1, nomePizza: 'frango', tamanho: "grande", categoria: "salgado", saborList: [], pedidoList: [], preco: 10  };
    component.lista = [pizza];
    spyOn(window, 'confirm').and.returnValue(true);

    component.excluir(pizza, 0);
    tick();

    expect(window.confirm).toHaveBeenCalled();
    expect(component.lista.length).toBe(0);
    expect(modalService.dismissAll).toHaveBeenCalled();
  }));
});
