import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosDetailsComponent } from './funcionarios-details.component';

describe('FuncionariosDetailsComponent', () => {
  let component: FuncionariosDetailsComponent;
  let fixture: ComponentFixture<FuncionariosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosDetailsComponent]
    });
    fixture = TestBed.createComponent(FuncionariosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
