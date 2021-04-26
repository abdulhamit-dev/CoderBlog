import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { YaziDto } from 'src/app/models/Dtos/yazi/YaziDto';
import { YorumDto } from 'src/app/models/Dtos/yazi/YorumDto';
import { Begeni } from 'src/app/models/yazi/begeni';
import { Yorum } from 'src/app/models/yazi/yorum';
import { YaziService } from 'src/app/services/yazi/yazi.service';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css'],
})
export class DetayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private yaziService: YaziService,
    private messageService: MessageService
  ) {}
  yazi: YaziDto = new YaziDto();
  yorumList: YorumDto[] = [];
  sonuc: any;
  begeni: Begeni = new Begeni();
  yorum: Yorum = new Yorum();
  modal: boolean;

  ngOnInit(): void {
    this.sonuc = this.route.snapshot.paramMap.get('id');
    this.YaziGetir();
    this.YorumGetir();
  }

  YaziGetir() {
    this.yaziService.YaziGetir(this.sonuc).subscribe((rv) => {
      this.yazi = rv;
    });
  }

  YorumGetir() {
    this.yaziService.YaziYorumlari(this.sonuc).subscribe((rv) => {
      this.yorumList = rv;
    });
  }

  Begen() {

    var kulId:number=this.yaziService.AktifKullaniciId();
    console.log("kul 2"+kulId)
    if(kulId<=0){
      this.messageService.add({
        severity:"warn",
        summary:"Dikkat",
        detail:"Beğen için giriş yapınız"
      })
    }else{

      this.yaziService.Begen(this.yazi.id).subscribe((rv) => {
        if (rv) {
          this.yazi.begeniSayisi += 1;
        } else {
          this.yazi.begeniSayisi -= 1;
        }
      });
    }

  }

  YorumYap() {

    var kulId:number=this.yaziService.AktifKullaniciId();
    console.log("kul 2"+kulId)
    if(kulId<=0){
      this.messageService.add({
        severity:"warn",
        summary:"Dikkat",
        detail:"Yorum için giriş yapınız"
      })
    }else{

      this.yorum.yaziId = this.yazi.id;
      this.yaziService.YorumKaydet(this.yorum).subscribe((rv) => {
        console.log("hata")
        if (rv) {
          this.YorumGetir();
          this.yazi.yorumSayisi += 1;
        }
        this.modal = false;
      });
    }

  }

  YorumDialog() {
    this.yorum.aciklama = '';
    this.modal = true;
  }
}
