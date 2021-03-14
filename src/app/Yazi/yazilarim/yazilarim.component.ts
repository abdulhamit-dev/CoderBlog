import { Component, OnInit } from '@angular/core';
import { Yazi } from 'src/app/models/yazi/yazi';
import { YaziService } from 'src/app/services/yazi/yazi.service';

@Component({
  selector: 'app-yazilarim',
  templateUrl: './yazilarim.component.html',
  styleUrls: ['./yazilarim.component.css']
})
export class YazilarimComponent implements OnInit {

  constructor(private yaziService:YaziService) { }
  yaziList:Yazi[]=[]
  ngOnInit(): void {
    this.yaziService.YaziListesiKullanici().subscribe(rv=>{
      this.yaziList=rv
    })
  }

}
