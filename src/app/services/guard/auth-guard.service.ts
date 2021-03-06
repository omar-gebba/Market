import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authSer: AuthService, private router: Router) { }

  canActivate(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|Observable<boolean>|Promise<boolean> {
    return new Promise(resolve =>{
      this.authSer.user.subscribe(user => {
        if (user) resolve (true)
        else{
          resolve (false);
          this.router.navigate(['/login']);
        }
      })
    })

  }
}
