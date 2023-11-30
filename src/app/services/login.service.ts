import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';
import { JwtPayload, jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


api: string = 'http://localhost:8080/login';

http = inject(HttpClient);

  constructor() { }


  logar(login:Login): Observable<Funcionario>{

    return this.http.post<Funcionario>(this.api,login);

  }


  deslogar(): Observable<any>{

    return this.http.get<any>(this.api + '/deslogar');
  }



  addToken(token: string){

    localStorage.setItem('token',token);

  }


  getToken(){

    return localStorage.getItem('token');

  }


  removeToken(){

localStorage.removeItem('token');

  }


  decodeToken(){


    let token = this.getToken() as string;

    const decoded = jwtDecode<JwtPayload>(token) as Funcionario; 
    console.log(decoded.role);
    console.log(decoded.username);
    return decoded;


  }


  hasPermission(role: string){

    if(role == this.decodeToken().role){

      return true;
    }

    else{

      return false;
    }
    


  }


}
