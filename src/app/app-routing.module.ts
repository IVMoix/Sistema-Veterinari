import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { PaginasRoutingModule } from './paginas/paginas.routing';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'**', redirectTo:'/login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PaginasRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
