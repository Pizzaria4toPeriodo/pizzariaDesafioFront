import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosDetailsComponent } from './enderecos-details.component';

describe('EnderecosDetailsComponent', () => {
  let component: EnderecosDetailsComponent;
  let fixture: ComponentFixture<EnderecosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecosDetailsComponent]
    });
    fixture = TestBed.createComponent(EnderecosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
