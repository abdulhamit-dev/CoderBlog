import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/models/kategori/kategori';
import { Yazi } from 'src/app/models/yazi/yazi';
import { KategoriService } from 'src/app/services/kategori/kategori.service';
import { YaziService } from 'src/app/services/yazi/yazi.service';

@Component({
  selector: 'app-yeni-yazi',
  templateUrl: './yeni-yazi.component.html',
  styleUrls: ['./yeni-yazi.component.css']
})
export class YeniYaziComponent implements OnInit {

  constructor(private yaziService: YaziService, private kategoriService: KategoriService) { }
  yazi: Yazi = new Yazi()
  kategori: Kategori = new Kategori();
  kategoriList: Kategori[] = [];
  resim: string;
  yaziKapakResmi: File;

  ngOnInit(): void {
    this.kategoriService.KategoriListesi().subscribe(rv => {
      this.kategoriList = rv
    })
  }


  ResimGor(event: any) {
    this.yaziKapakResmi = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.resim = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  YaziKaydet() {
    this.yazi.kategoriId=this.kategori.id;
    this.yaziService.YaziEkle(this.yazi,this.yaziKapakResmi).subscribe(rv => {

    })
  }





}
