import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends PublicService {

  constructor(http:HttpClient) {
    super(http)
   }

   Kayit(kul: Kullanici): Observable<any> {
    return this.http.post(this.baseUrl + 'kullanici/kaydet', kul);
  }
}
