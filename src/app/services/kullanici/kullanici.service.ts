import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { LoginService } from '../auth/login.service';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService extends PublicService {

  kullanici:Kullanici=new Kullanici();
  constructor(http:HttpClient, private loginService: LoginService) {super(http);
    loginService.aktifKullaniciBilgi.subscribe((rv) => {
      this.kullanici = rv;
    });

  }
  KullaniciDuzenle(kul: Kullanici): Observable<any> {
    return this.http.post<Kullanici>(this.baseUrl + 'kullanici/Kaydet', kul);
  }
  KullaniciGetir():Observable<any>{
    return this.http.get<Kullanici>(this.baseUrl+'kullanici/get?id='+this.kullanici.id)
  }

  KullaniciDuzenleV2(kul: Kullanici, kulResim: File): Observable<any> {

    const formData = new FormData();

    formData.append('kullanici', JSON.stringify(kul));
    formData.append('kullaniciResmi', kulResim);

    return this.http.post<Kullanici>(this.baseUrl + 'kullanici/Duzenle', formData);
  }
}
