import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index/index.component';
import { LoginComponent } from './sistema/login/login.component';

const routes: Routes = [
{path: "", redirectTo: "login", pathMatch: "full"},
{path: "login", component: LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
