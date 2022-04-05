import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, Router} from "@angular/router";
import {Observable, of} from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.auth.isLoggedIn) {
      return of(true)
    } else {
      this.router.navigate(['/login-form'])
      return of(false)
    }
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let myRole = this.auth.role
    let roles = next.data['roles'] as Array<string>
    if (!roles || roles.indexOf(myRole) !== -1) return of(true)
    else {
      this.router.navigate(['/dashboard'])
      alert('Only admin can use this section')
      return of(false)
    }
  }
}
