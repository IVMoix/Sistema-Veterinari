import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { PaginasRoutingModule } from './paginas/paginas.routing';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PaginasRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
