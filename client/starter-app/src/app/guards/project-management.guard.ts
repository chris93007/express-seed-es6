import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../providers/user.service';

@Injectable()
export class ProjectManagementGuard implements CanActivate {

  constructor( private userService:UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(this.userService.userRole=='admin'){
        return true;
      }
      else{
        return null;
      }

  }
}
