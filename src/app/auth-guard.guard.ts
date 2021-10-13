import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private authService:AuthServiceService, private router:Router){
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.processLogin();
  }

  processLogin(){
    if(this.authService.isUserLoggedIn()){
      return true;
    }else{
      console.log('inside else auth')
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
