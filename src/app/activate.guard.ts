import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private _UserService:UserService,private router:Router){}
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   // throw new Error("Method not implemented.");
  // }
  canActivate():boolean{
    if(this._UserService.isactive()){
      return true;
    }
    else{
      alert("Not authorized");
      this.router.navigate(['home'])
    }
  }
  
}
