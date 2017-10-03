import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { Observable } from 'rxjs/Observable';
import {Location} from '@angular/common';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if(user && user.role == 'Admin'){
        return true
      }
      console.log("not admin here");
      // not admin in so redirect to login page with the return url
      this.router.navigate([state.url], { queryParams: { returnUrl: state.url }});
    
      this.alertService.error("You must be an admin to access that", true);
      return false;
    
  }
}
