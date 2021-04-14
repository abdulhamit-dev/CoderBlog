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
  ngOnInit(): void {
    this.kulService.KullaniciGetir().subscribe((rv) => {
      console.log(rv)
      this.kullanici = rv;
    });
  }
  Kaydet() {
    this.kulService.KullaniciDuzenle(this.kullanici).subscribe((x) => {
      if (x) {
        console.log('kayıt başarılı');
      }
    });
  }
}
