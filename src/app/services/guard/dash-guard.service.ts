import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs';
import { AuthService }  from '../auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DashGuardService implements CanActivate {

  constructor(private authSer: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|Observable<boolean>|Promise<boolean>{
    return new Promise(resolve => {
      this.authSer.user.subscribe(user => {
        if(user) resolve (true);
        else{
          resolve (false);
          this.router.navigate(['/login'])
        }
      })
    })

  }
}
