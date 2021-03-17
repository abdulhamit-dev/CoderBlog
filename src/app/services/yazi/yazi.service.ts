import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { Yazi } from 'src/app/models/yazi/yazi';
import { LoginService } from '../auth/login.service';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root'
})
export class YaziService extends PublicService {
  kullanici: Kullanici = new Kullanici()
  constructor(http: HttpClient, private loginService: LoginService) {
    super(http)
    loginService.aktifKullaniciBilgi.subscribe(rv => {
      this.kullanici = rv
    });
  }

  YaziEkle(yazi: Yazi): Observable<any> {
    yazi.kullaniciId = this.kullanici.id
    yazi.yaziTarih = new Date;
    return this.http.post<Yazi>(this.baseUrl + "yazi/YaziKaydet", yazi)
  }

  YaziDuzenle(yazi: Yazi): Observable<any> {
    yazi.kullaniciId = this.kullanici.id
    return this.http.post<Yazi>(this.baseUrl + "yazi/YaziKaydet", yazi)
  }

  YaziSil(yazi: Yazi): Observable<any> {
    return this.http.post<Yazi>(this.baseUrl + "yazi/sil", yazi)
  }

  YaziListesiKullanici(): Observable<Yazi[]> {
    return this.http.get<Yazi[]>(this.baseUrl + "yazi/getlistfilter?kullaniciId=" + this.kullanici.id + "&kategoriId=0")
  }

  YaziListesiKategori(kategoriId: number): Observable<Yazi[]> {
    return this.http.get<Yazi[]>(this.baseUrl + "yazi/getlistfilter?kullaniciId=0&kategoriId=" + kategoriId)
  }
  
  YaziListesiKullaniciKategori(kategoriId: number): Observable<Yazi[]> {
    return this.http.get<Yazi[]>(this.baseUrl + "yazi/getlistfilter?kullaniciId="+this.kullanici.id+"&kategoriId=" + kategoriId)
  }

  YaziGetir(id: number): Observable<Yazi> {
    return this.http.get<Yazi>(this.baseUrl + 'yazi/get?id=' + id)
  }

  YaziListesiTrendOlanlar():Observable<any>{
    return this.http.get<Yazi>(this.baseUrl + 'yazi/getlist')
  }

  YaziListesiYeniler():Observable<any>{
    return this.http.get<Yazi>(this.baseUrl + 'yazi/getlist')
  }



}
