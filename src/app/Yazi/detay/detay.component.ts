import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YaziDto } from 'src/app/models/Dtos/yazi/YaziDto';
import { YorumDto } from 'src/app/models/Dtos/yazi/YorumDto';
import { Yazi } from 'src/app/models/yazi/yazi';
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
    private yaziService: YaziService
  ) { }
  yazi: YaziDto = new YaziDto();
  yorumList: YorumDto[] = [];
  sonuc: any;
  ngOnInit(): void {
    this.sonuc = this.route.snapshot.paramMap.get('id');
    this.YaziGetir()
    this.YorumGetir()
  }

  YaziGetir() {
    this.yaziService.YaziGetir(this.sonuc).subscribe((rv) => {
      this.yazi = rv;
    });
  }

  YorumGetir() {
    this.yaziService.YaziYorumlari(this.sonuc).subscribe((rv) => {

      this.yorumList = rv;
      console.log(rv)
    });
  }
}
