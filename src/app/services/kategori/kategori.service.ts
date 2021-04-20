import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YaziDto } from 'src/app/models/Dtos/yazi/YaziDto';
import { Kategori } from 'src/app/models/kategori/kategori';
import { PublicService } from '../public.service';

@Injectable({
  providedIn: 'root'
})
export class KategoriService extends PublicService {

  constructor(http:HttpClient) {super(http) }
  KategoriListesi():Observable<Kategori[]>{
    return this.http.get<Kategori[]>(this.baseUrl+"kategori/getlist");
  }



}
