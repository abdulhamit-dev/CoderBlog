import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YaziDto } from 'src/app/models/Dtos/yazi/YaziDto';
import { YaziService } from 'src/app/services/yazi/yazi.service';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css'],
})
export class DetayComponent implements OnInit {
  constructor(private route: ActivatedRoute,private yaziService:YaziService) {}
  sonuc: any;
  yaziList:YaziDto[]=[]
  ngOnInit(): void {
    this.sonuc = this.route.snapshot.paramMap.get('adi');

    this.yaziService.YaziListesiKategori(this.sonuc).subscribe(rv=>{
      this.yaziList=rv;
    })
  }
}
