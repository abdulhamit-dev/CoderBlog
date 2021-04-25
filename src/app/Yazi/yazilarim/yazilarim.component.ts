import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
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

  imageChangedEvent: any = '';
  kirpilanResim: any = '';
  showCropper = false;

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
    this.yaziService.YaziEkle(this.yazi,this.kirpilanResim).subscribe(rv => {

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

  Sil(event: Event,seciliYazi:Yazi) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Yazı silinsin mi?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.yaziService.YaziSil(seciliYazi).subscribe(rv=>{
          if(rv){
            this.yaziList=rv;
            console.log(rv);
            this.messageService.add({

              severity: "success",
              summary: "Başarılı",
              detail: "Yazı Silindi",
            });
          }else{
            this.messageService.add({

              severity: "error",
              summary: "Hata",
              detail: "Yazı Silinemedi",
            });
          }
        })

      },
      reject: () => {
        // this.messageService.add({
        //   severity: "error",
        //   summary: "Vazgeçildi",
        //   detail: "You have rejected"
        // });
      }
    });
  }
  FileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  ImageCropped(event: ImageCroppedEvent) {
    this.kirpilanResim = event.base64;
  }

  ImageLoaded() {
    this.showCropper = true;
  }
}
