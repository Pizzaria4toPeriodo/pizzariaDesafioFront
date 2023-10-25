import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosListComponent } from './enderecos-list.component';

describe('EnderecosListComponent', () => {
  let component: EnderecosListComponent;
  let fixture: ComponentFixture<EnderecosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecosListComponent]
    });
    fixture = TestBed.createComponent(EnderecosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
