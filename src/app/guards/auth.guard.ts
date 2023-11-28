
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../servicios/login.service";

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean  {
      return true;
    
  }
  isLogin(): any{
    if ( this.loginService.isLoggedIn()) {
      return true;
    } 
    this.router.navigateByUrl('/dashboard/nuevo-historial');
  }
}
