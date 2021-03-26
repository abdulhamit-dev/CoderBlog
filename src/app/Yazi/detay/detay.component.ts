import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Yazi } from 'src/app/models/yazi/yazi';
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
  ) {}
  yazi: Yazi = new Yazi();

  sonuc: any;
  ngOnInit(): void {
    this.sonuc = this.route.snapshot.paramMap.get('id');
    this.YaziGetir()
  }

  YaziGetir() {
    this.yaziService.YaziGetir(this.sonuc).subscribe((rv) => {
      this.yazi = rv;
    });
  }
}
