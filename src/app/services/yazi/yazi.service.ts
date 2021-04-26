import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { YaziDto } from 'src/app/models/Dtos/yazi/YaziDto';
import { YaziFormFileDto } from 'src/app/models/Dtos/yazi/YaziFormFileDto';
import { YaziPostDto } from 'src/app/models/Dtos/yazi/YaziPostDto';
import { YorumDto } from 'src/app/models/Dtos/yazi/YorumDto';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { Begeni } from 'src/app/models/yazi/begeni';
import { Yazi } from 'src/app/models/yazi/yazi';
import { Yorum } from 'src/app/models/yazi/yorum';
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

  YaziEkle(yazi: Yazi, yaziBase64: string): Observable<any> {
    var yaziPostDto: YaziPostDto = new YaziPostDto();
    yazi.kullaniciId = this.kullanici.id;
    yazi.yaziTarih = new Date();
    yaziPostDto.yazi = JSON.stringify(yazi);
    yaziPostDto.yaziBase64 = yaziBase64;

    return this.http.post<Yazi>(this.baseUrl + 'yazi/YaziKaydet', yaziPostDto);
  }
  //  Bu metod fileupload ile dosya upload ederken kullandığım metod du amacım post ederken file dosyasınıda post etmek
  // YaziEkle(yazi: Yazi,yaziBase64:string, yaziKapakResmi: File): Observable<any> {

  //   const formData = new FormData();
  //   yazi.kullaniciId = this.kullanici.id;
  //   yazi.yaziTarih = new Date();
  //   console.log(JSON.stringify(yazi))

  //   formData.append('yazi', JSON.stringify(yazi));
  //   formData.append('yaziBase64', yaziBase64);
  //   formData.append('yaziKapakResim', yaziKapakResmi);

  //   return this.http.post<Yazi>(this.baseUrl + 'yazi/YaziKaydet', formData);
  // }

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

  YaziListesiKullaniciKategori(kategoriId: number): Observable<Yazi[]> {
    return this.http.get<Yazi[]>(
      this.baseUrl +
        'yazi/getlistfilter?kullaniciId=' +
        this.kullanici.id +
        '&kategoriId=' +
        kategoriId
    );
  }

  YaziGetir(id: number): Observable<YaziDto> {
    return this.http.get<YaziDto>(this.baseUrl + 'yazi/get?id=' + id);
  }

  YaziListesiTrendOlanlar(): Observable<any> {
    return this.http.get<YaziDto>(this.baseUrl + 'yazi/getlisttrendler');
  }

  YaziListesiYeniler(): Observable<any> {
    return this.http.get<YaziDto>(this.baseUrl + 'yazi/getlistyeniler', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      }),
    });
  }

  YaziListesiKategori(kategoriAdi: string): Observable<any> {
    return this.http.get<YaziDto>(
      this.baseUrl + 'yazi/getlistkategoriyazi?kategoriAdi=' + kategoriAdi
    );
  }

  YaziYorumlari(id: number): Observable<any> {
    return this.http.get<YorumDto>(
      this.baseUrl + 'yazi/getlistyaziyorum?yaziId=' + id
    );
  }

  Begen(yaziId: number): Observable<Begeni> {
    var begeni: Begeni = new Begeni();
    begeni.yaziId = yaziId;
    begeni.kullaniciId = +this.kullanici.id;
    begeni.kayitTarihi = new Date();

    return this.http.post<Begeni>(this.baseUrl + 'begen/kaydet', begeni);
  }

  YorumKaydet(yorum: Yorum): Observable<any> {
    yorum.kullaniciId = +this.kullanici.id;
    yorum.kayitTarihi = new Date();
    return this.http.post<Begeni>(this.baseUrl + 'yorum/kaydet', yorum);
  }

  AktifKullaniciId(): number {
    if (this.kullanici == null)
    return 0;
    else
    return this.kullanici.id;
  }
}
