import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosDetailsComponent } from './enderecos-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EnderecosDetailsComponent', () => {
  let component: EnderecosDetailsComponent;
  let fixture: ComponentFixture<EnderecosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecosDetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EnderecosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
