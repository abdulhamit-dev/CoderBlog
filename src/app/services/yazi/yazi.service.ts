import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { Yazi } from 'src/app/models/yazi/yazi';
import { LoginService } from '../auth/login.service';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root',
})
export class YaziService extends PublicService {
  kullanici: Kullanici = new Kullanici();
  headers: HttpHeaders;
  constructor(http: HttpClient, private loginService: LoginService) {
    super(http);
    loginService.aktifKullaniciBilgi.subscribe((rv) => {
      this.kullanici = rv;
    });

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
  }


  // YaziEkle(yazi: Yazi): Observable<any> {
  //   yazi.kullaniciId = this.kullanici.id;
  //   yazi.yaziTarih = new Date();
  //   return this.http.post<Yazi>(this.baseUrl + 'yazi/YaziKaydet', yazi);
  // }

  YaziEkle(yazi: Yazi,yaziKapakResmi: File): Observable<any> {
 
    const formData = new FormData();
    yazi.kullaniciId = this.kullanici.id;
    yazi.yaziTarih = new Date();
    formData.append('yazi', JSON.stringify(yazi));
    formData.append('yaziKapakResim', yaziKapakResmi);

    return this.http.post<Yazi>(this.baseUrl + 'yazi/YeniYaziKaydet', formData);
  }

  YaziDuzenle(yazi: Yazi): Observable<any> {
    yazi.kullaniciId = this.kullanici.id;
    return this.http.post<Yazi>(this.baseUrl + 'yazi/YaziKaydet', yazi);
  }

  YaziSil(yazi: Yazi): Observable<any> {
    return this.http.post<Yazi>(this.baseUrl + 'yazi/sil', yazi);
  }

  YaziListesiKullanici(): Observable<Yazi[]> {
    return this.http.get<Yazi[]>(
      this.baseUrl +
      'yazi/getlistfilter?kullaniciId=' +
      this.kullanici.id +
      '&kategoriId=0'
    );
  }

  YaziListesiKategori(kategoriId: number): Observable<Yazi[]> {
    return this.http.get<Yazi[]>(
      this.baseUrl + 'yazi/getlistfilter?kullaniciId=0&kategoriId=' + kategoriId
    );
  }

  YaziListesiKullaniciKategori(kategoriId: number): Observable<Yazi[]> {
    return this.http.get<Yazi[]>(
      this.baseUrl +
      'yazi/getlistfilter?kullaniciId=' +
      this.kullanici.id +
      '&kategoriId=' +
      kategoriId
    );
  }

  YaziGetir(id: number): Observable<Yazi> {
    return this.http.get<Yazi>(this.baseUrl + 'yazi/get?id=' + id);
  }

  YaziListesiTrendOlanlar(): Observable<any> {
    return this.http.get<Yazi>(this.baseUrl + 'yazi/getlisttrendler');
  }

  YaziListesiYeniler(): Observable<any> {

    return this.http.get<Yazi>(this.baseUrl + 'yazi/getlistyeniler', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      }),
    });
  }

  ResimYukle(file: any) {
    return this.http.post(this.baseUrl + 'yazi/FileUpload', file, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
