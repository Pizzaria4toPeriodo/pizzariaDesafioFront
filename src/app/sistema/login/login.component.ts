import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login :Login = new Login();

  loginService = inject(LoginService);

  roteador = inject(Router);

  constructor() {
    this.loginService.removeToken();
  }

  logar() {


    this.loginService.logar(this.login).subscribe({
      next: user => { 
        console.log(user);
        this.loginService.addToken(user.token);
        this.roteador.navigate(['inicio/produtos']);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
        console.log('nao foi')
      }
    });

  }





}
