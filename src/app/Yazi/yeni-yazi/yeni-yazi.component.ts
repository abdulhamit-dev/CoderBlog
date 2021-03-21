import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/models/yazi/kategori';
import { Yazi } from 'src/app/models/yazi/yazi';
import { KategoriService } from 'src/app/services/yazi/kategori.service';
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

  ngOnInit(): void {
    this.kategoriService.KategoriListesi().subscribe(rv => {
      this.kategoriList = rv
    })
  }

  Kaydet() {
    this.yazi.kategoriId = this.kategori.id
    this.yaziService.YaziEkle(this.yazi).subscribe(x => {
      if (x) {
        alert('Kayıt Başarılı')

      } else {
        alert('Kayıt Başarısız')
      }
    })
  }
  
}
