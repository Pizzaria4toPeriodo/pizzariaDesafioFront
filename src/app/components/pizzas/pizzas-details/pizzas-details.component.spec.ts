import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasDetailsComponent } from './pizzas-details.component';

describe('PizzasDetailsComponent', () => {
  let component: PizzasDetailsComponent;
  let fixture: ComponentFixture<PizzasDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasDetailsComponent]
    });
    fixture = TestBed.createComponent(PizzasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
