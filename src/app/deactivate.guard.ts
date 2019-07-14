import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements  DeactivateGuard{
canDeactivate():boolean{
  return window.confirm("Are u sure want to leave this page!");
}  
}
