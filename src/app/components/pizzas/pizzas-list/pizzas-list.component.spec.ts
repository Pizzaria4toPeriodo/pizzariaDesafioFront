import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasListComponent } from './pizzas-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

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
});
