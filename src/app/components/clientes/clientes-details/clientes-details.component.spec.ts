import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDetailsComponent } from './clientes-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ClientesDetailsComponent', () => {
  let component: ClientesDetailsComponent;
  let fixture: ComponentFixture<ClientesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ClientesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
