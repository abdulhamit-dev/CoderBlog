import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { Kullanici } from '../models/kullanici/kullanici';
import { LoginService } from './auth/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
    private loginService: LoginService
  ) {}



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedTokenKullanici = <Kullanici>(this.jwtHelper.decodeToken(token!));
      this.loginService.aktifKullaniciBilgi.next(decodedTokenKullanici);
      this.loginService.aktifKullanici.next(true);
      return true;
    } else {
      this.loginService.aktifKullanici.next(false);
      this.loginService.aktifKullaniciBilgi.next(null!);
      this.loginService.Cikis();
      this.router.navigate(['login'], {queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
