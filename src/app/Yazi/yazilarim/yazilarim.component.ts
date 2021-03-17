import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/models/yazi/kategori';
import { Yazi } from 'src/app/models/yazi/yazi';
import { KategoriService } from 'src/app/services/yazi/kategori.service';
import { YaziService } from 'src/app/services/yazi/yazi.service';

@Component({
  selector: 'app-yazilarim',
  templateUrl: './yazilarim.component.html',
  styleUrls: ['./yazilarim.component.css'],
})
export class YazilarimComponent implements OnInit {
  constructor(
    private yaziService: YaziService,
    private kategoriService: KategoriService
  ) {}
  modalDurumu: boolean = false;
  yaziList: Yazi[] = [];

  yazi: Yazi = new Yazi();
  kategori: Kategori = new Kategori();
  kategoriList: Kategori[] = [];

  ngOnInit(): void {
    this.yaziService.YaziListesiKullanici().subscribe((rv) => {
      this.yaziList = rv;
    });

    this.kategoriService.KategoriListesi().subscribe((rv) => {
      this.kategoriList = rv;
    });
  }

  DuzenleModal(yaziId: number, kategoriId: number) {
    this.modalDurumu = true;
    this.kategori = this.kategoriList.find((x) => x.id == kategoriId)!;
    this.yazi = this.yaziList.find((x) => x.id == yaziId)!;
  }

  YaziDuzenle() {
    this.yazi.kategoriId = this.kategori.id;
    this.yaziService.YaziDuzenle(this.yazi).subscribe((x) => {
      if (!x) {
        alert('Kayıt Başarısız');
      }
    });
    this.modalDurumu = false;
  }
}
