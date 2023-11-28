import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasDetailsComponent } from './pizzas-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
