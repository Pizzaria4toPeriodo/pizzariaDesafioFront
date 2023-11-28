import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosDetailsComponent } from './funcionarios-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FuncionariosDetailsComponent', () => {
  let component: FuncionariosDetailsComponent;
  let fixture: ComponentFixture<FuncionariosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FuncionariosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
