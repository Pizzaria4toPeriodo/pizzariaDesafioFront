import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Login } from 'src/app/models/login';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {    
    let login: Login = new Login();
    login.username = "nicolas";
    login.password = "asdqw";
    component.login = login;
  });

  it('criacao do componente', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="typeEmailX"]'));
    expect(elemento.nativeElement.ngModel).toEqual("nicolas");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="typeEmailX"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 2 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputPassword1"]'));
    expect(elemento.nativeElement.ngModel).toEqual("asdqw");
  });

  it('Teste no null de @Input 2 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputPassword1"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  beforeEach(() => {
    let login: Login = new Login();
    login.username = "nicolas";
    login.password = "asdqw";

    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(login));
    spyOn(httpSpy, 'put').and.returnValue(of(login));

    fixture.detectChanges();
  });
});
