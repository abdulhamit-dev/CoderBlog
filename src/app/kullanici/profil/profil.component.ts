import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { KullaniciService } from 'src/app/services/kullanici/kullanici.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  constructor(private kulService: KullaniciService) {}
  kullanici: Kullanici = new Kullanici();
  kullaniciResim:File;
  resim:string="";
  ngOnInit(): void {
    this.kulService.KullaniciGetir().subscribe((rv) => {
      console.log(rv)
      this.kullanici = rv;
    });
  }
  Kaydet() {
    // this.kulService.KullaniciDuzenle(this.kullanici).subscribe((x) => {
    //   if (x) {
    //     console.log('kayıt başarılı');
    //   }
    // });

    this.kulService.KullaniciDuzenleV2(this.kullanici,this.kullaniciResim).subscribe(rv=>{
      console.log(rv);
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
}
