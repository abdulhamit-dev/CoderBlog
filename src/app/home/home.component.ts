import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Yazi } from '../models/yazi/yazi';
import { LoginService } from '../services/auth/login.service';
import { YaziService } from '../services/yazi/yazi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private yaziService: YaziService,
    private router:Router
  ) {}
  
  yaziListTrend: Yazi[] = [];
  yaziListYeniler: Yazi[] = [];

  ngOnInit(): void {
    this.loginService.KullaniciBilgisiKontrol();
    this.YeniYazilar();
    this.TrendYazilar();
  }

  YeniYazilar() {
    this.yaziService.YaziListesiYeniler().subscribe((rv) => {
      this.yaziListYeniler = rv;
      
    });
  }

  TrendYazilar() {
    this.yaziService.YaziListesiTrendOlanlar().subscribe((rv) => {
      this.yaziListTrend = rv;
    });
  }

  OneriHesaplar() {}

  OneriKategori() {}


}
