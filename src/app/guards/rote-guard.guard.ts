import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const roteGuardGuard: CanActivateFn = (route, state) => {


  let loginService = inject(LoginService);
  let roteador = inject(Router);


  if(loginService.getToken() == null){

    roteador.navigate(['api/login']);
    return false
  }
  else{

    return true;

  }


  
};
