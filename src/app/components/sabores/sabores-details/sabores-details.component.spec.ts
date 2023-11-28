import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SaboresDetailsComponent } from './sabores-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';
import { Pizza } from 'src/app/models/pizza';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


describe('SaboresDetailsComponent', () => {
  let component: SaboresDetailsComponent;
  let fixture: ComponentFixture<SaboresDetailsComponent>;
  let pizzaMock: Pizza[];
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboresDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SaboresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {  

    pizzaMock = [
      { id: 1,
        nomePizza: 'Pizza1',
        tamanho: 'Mediano',
        categoria: 'Especial',
        saborList: [], 
        pedidoList: [], 
        preco: 10.99,},
    ];

    let sabor: Sabor = new Sabor();
    sabor.id = 1;
    sabor.nomeSabor = "frango";
    sabor.categoria = "salgado";
    sabor.pizzaList = pizzaMock;
    component.sabor = sabor;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomeSabor"]'));
    expect(elemento.nativeElement.ngModel).toEqual("frango");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nomeSabor"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 2 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="categoria"]'));
    expect(elemento.nativeElement.ngModel).toEqual("salgado");
  });

  it('Teste no null de @Input 2- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="categoria"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de @Output() retorno', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));


  beforeEach(() => {
    let sabor = new Sabor();
    sabor.id = 1;
    sabor.nomeSabor = "frango";
    sabor.categoria = "salgado";
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(sabor));
    spyOn(httpSpy, 'put').and.returnValue(of(sabor));

    fixture.detectChanges();
  });
});
