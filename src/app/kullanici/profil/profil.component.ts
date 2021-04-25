import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MessageService } from 'primeng/api';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { KullaniciService } from 'src/app/services/kullanici/kullanici.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  constructor(private kulService: KullaniciService,private messageService:MessageService) {}
  kullanici: Kullanici = new Kullanici();
  kullaniciResim:File;
  resim:string="";

  imageChangedEvent: any = '';
  kirpilanResim: any = '';
  showCropper = false;

  ngOnInit(): void {
    this.kulService.KullaniciGetir().subscribe((rv) => {
      console.log(rv)
      this.kullanici = rv;
    });
  }
  Kaydet() {

    this.kulService.KullaniciDuzenle(this.kullanici,this.kirpilanResim).subscribe(rv=>{
      if(rv){
        this.messageService.add({
          severity: 'success',
          summary: 'Başarılı',
          detail: 'Kayıt Başarılı',
        });
      }else{
        this.messageService.add({
          severity: 'error',
          summary: 'Hata',
          detail: 'İşlem sırasında bir hata oluştu',
        });
      }
    })
  }

  ResimGor(event: any) {
    this.kullaniciResim = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.resim = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
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
