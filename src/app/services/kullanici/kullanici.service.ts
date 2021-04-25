import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base64ToFile } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { KullaniciPostDto } from 'src/app/models/Dtos/kullanici/KullaniciPostDto';
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
  KullaniciGetir():Observable<any>{
    return this.http.get<Kullanici>(this.baseUrl+'kullanici/get?id='+this.kullanici.id)
  }

  KullaniciDuzenle(kul: Kullanici,base64Image:string): Observable<any> {
    var kulPost:KullaniciPostDto=new KullaniciPostDto();
    kulPost.kullanici=JSON.stringify(kul)
    kulPost.kulResimBase64=base64Image;

    return this.http.post<Kullanici>(this.baseUrl + 'kullanici/Duzenle',kulPost );
  }
}
