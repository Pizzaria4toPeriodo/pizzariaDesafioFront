import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosListComponent } from './funcionarios-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FuncionariosListComponent', () => {
  let component: FuncionariosListComponent;
  let fixture: ComponentFixture<FuncionariosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FuncionariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
