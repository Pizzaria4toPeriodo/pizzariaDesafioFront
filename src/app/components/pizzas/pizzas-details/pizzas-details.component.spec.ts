import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { PizzasDetailsComponent } from './pizzas-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Sabor } from 'src/app/models/sabor';

describe('PizzasDetailsComponent', () => {
  let component: PizzasDetailsComponent;
  let fixture: ComponentFixture<PizzasDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PizzasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {    
    let pizza: Pizza = new Pizza();
    pizza.id = 1;
    pizza.nomePizza = "frango";
    pizza.tamanho = "grande";
    pizza.categoria = "salgado";
    pizza.saborList = [];
    pizza.pedidoList = [];
    pizza.preco = 4;
    component.pizza = pizza;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomePizza"]'));
    expect(elemento.nativeElement.ngModel).toEqual("frango");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomePizza"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 2 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="tamanho"]'));
    expect(elemento.nativeElement.ngModel).toEqual("grande");
  });

  it('Teste no null de @Input 2- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="tamanho"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 3 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="categoria"]'));
    expect(elemento.nativeElement.ngModel).toEqual("salgado");
  });

  it('Teste no null de @Input 3- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="categoria"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 4 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="preco"]'));
    expect(elemento.nativeElement.ngModel).toEqual(4);
  });

  it('Teste no null de @Input 4- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="preco"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de @Output() retorno', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  it('debería excluir un sabor de la lista', () => {
    const sabor1: Sabor = { id: 1, nomeSabor: 'Jamon', categoria: 'Salgado', pizzaList: [] };
    const sabor2: Sabor = { id: 2, nomeSabor: 'Queiso', categoria: 'Salgado', pizzaList: [] };
    const sabor3: Sabor = { id: 3, nomeSabor: 'Strogonoff', categoria: 'Salgado', pizzaList: [] };

    component.pizza = { id: 1, nomePizza: 'Pizza da Casa', tamanho: 'Grande', categoria: 'Especial', saborList: [sabor1, sabor2, sabor3], pedidoList: [], preco: 15.99 };

    expect(component.pizza.saborList.length).toBe(3);

    component.excluir(sabor2, 1);

    expect(component.pizza.saborList.length).toBe(2);
    expect(component.pizza.saborList).toEqual([sabor1, sabor3]);
  });

  it('componente depois do retornoSaborList', () => {
    const sabor: Sabor = { id: 2, nomeSabor: 'frango', categoria: "salgado", pizzaList: [] };

    component.retornoSaboresList(sabor);

    expect(component.pizza.saborList).toContain(sabor);
  });

  beforeEach(() => {
    let pizza = new Pizza();
    pizza.id = 1;
    pizza.nomePizza = 'frango';
    pizza.tamanho = "grande";
    pizza.categoria = "salgado";
    pizza.saborList = [];
    pizza.pedidoList = [];
    pizza.preco = 4;
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(pizza));
    spyOn(httpSpy, 'put').and.returnValue(of(pizza));

    fixture.detectChanges();
  });


});
