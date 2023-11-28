import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresListComponent } from './sabores-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';

describe('SaboresListComponent', () => {
  let component: SaboresListComponent;
  let fixture: ComponentFixture<SaboresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaboresListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SaboresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const saboresMock: Sabor = { id: 1, nomeSabor: 'frango', categoria: "grande", pizzaList:[], }; 

    spyOn(component.retorno, 'emit');
    component.lancamento(saboresMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(saboresMock);
  });
});
