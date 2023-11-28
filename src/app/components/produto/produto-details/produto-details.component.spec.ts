import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ProdutoDetailsComponent } from './produto-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Produto } from 'src/app/models/produto';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ProdutoDetailsComponent', () => {
  let component: ProdutoDetailsComponent;
  let fixture: ComponentFixture<ProdutoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ProdutoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {    
    let produto: Produto = new Produto();
    produto.id = 1;
    produto.nomeProduto = "coixinha";
    produto.preco = 4;
    component.produto = produto;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual("coixinha");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 2 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="valor"]'));
    expect(elemento.nativeElement.ngModel).toEqual(4);
  });

  it('Teste no null de @Input 2- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="valor"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de @Output() retorno', fakeAsync(() => {
    spyOn(component.retorno, 'emit');
    component.salvar();
    expect(component.retorno.emit).toHaveBeenCalled();
  }));

  beforeEach(() => {
    let produto = new Produto();
    produto.id = 1;
    produto.nomeProduto = 'coixinha';
    produto.preco = 4;
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(produto));
    spyOn(httpSpy, 'put').and.returnValue(of(produto));

    fixture.detectChanges();
  });


});
