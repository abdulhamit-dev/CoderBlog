
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends PublicService {

  constructor(http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {
    super(http)
  }

  aktifKullanici = new BehaviorSubject<boolean>(false);
  aktifKullaniciBilgi = new BehaviorSubject<Kullanici>(null!);

  Giris(kul: Kullanici): Observable<any> {
    return this.http.post(this.baseUrl + 'auth/login', kul);
  }

  Cikis() {
    this.aktifKullanici.next(false)
    this.aktifKullaniciBilgi.next(null!)
    localStorage.removeItem('jwt');
    localStorage.removeItem('kullanici');
    this.router.navigateByUrl('/home');

  }

  //authguard kullanılmayan componentlerde oturumu açık olan kullanıcı bilgisini almak için
  KullaniciBilgisiKontrol(): boolean {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedTokenKullanici = <Kullanici>(this.jwtHelper.decodeToken(token!));
      this.aktifKullaniciBilgi.next(decodedTokenKullanici);
      this.aktifKullanici.next(true);
      return true;
    } else {
      this.aktifKullanici.next(false);
      this.aktifKullaniciBilgi.next(null!);
      return false;
    }
  }
}
