import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Kategori } from 'src/app/models/kategori/kategori';
import { Yazi } from 'src/app/models/yazi/yazi';
import { KategoriService } from 'src/app/services/kategori/kategori.service';
import { YaziService } from 'src/app/services/yazi/yazi.service';

@Component({
  selector: 'app-yazilarim',
  templateUrl: './yazilarim.component.html',
  styleUrls: ['./yazilarim.component.css'],
})
export class YazilarimComponent implements OnInit {
  constructor(
    private yaziService: YaziService,
    private kategoriService: KategoriService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}
  modalDurumu: boolean = false;
  yaziList: Yazi[] = [];

  yazi: Yazi = new Yazi();
  kategori: Kategori = new Kategori();
  kategoriList: Kategori[] = [];

  yaziKapakResmi: File;
  resim: string="";
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
    // this.yaziService.YaziDuzenle(this.yazi).subscribe((x) => {
    //   if (!x) {
    //     alert('Kayıt Başarısız');
    //   }
    // });

    this.yaziService.YaziEkle(this.yazi,this.yaziKapakResmi).subscribe(rv => {

    })

    this.modalDurumu = false;
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

  Sil(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Yazı silinsin mi?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected"
        });
      }
    });
  }
}
