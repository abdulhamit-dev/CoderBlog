import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/models/yazi/kategori';
import { Yazi } from 'src/app/models/yazi/yazi';

@Component({
  selector: 'app-yeni-yazi',
  templateUrl: './yeni-yazi.component.html',
  styleUrls: ['./yeni-yazi.component.css']
})
export class YeniYaziComponent implements OnInit {

  constructor() { }
  yazi:Yazi=new Yazi()
  kategori:Kategori=new Kategori();
  kategoriList:Kategori[]=[];
  ngOnInit(): void {
  }

  Kaydet(){

  }
}
