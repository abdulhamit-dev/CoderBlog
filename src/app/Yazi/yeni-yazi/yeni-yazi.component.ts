import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Kategori } from 'src/app/models/kategori/kategori';
import { Yazi } from 'src/app/models/yazi/yazi';
import { KategoriService } from 'src/app/services/kategori/kategori.service';
import { YaziService } from 'src/app/services/yazi/yazi.service';

@Component({
  selector: 'app-yeni-yazi',
  templateUrl: './yeni-yazi.component.html',
  styleUrls: ['./yeni-yazi.component.css']
})
export class YeniYaziComponent implements OnInit {

  constructor(private yaziService: YaziService, private kategoriService: KategoriService, private route: Router,private messageService: MessageService) { }
  yazi: Yazi = new Yazi()
  kategori: Kategori = new Kategori();
  kategoriList: Kategori[] = [];
  resim: string;
  yaziKapakResmi: File;

  @ViewChild('fileuploader') fileUploader:ElementRef;

  ngOnInit(): void {
    this.kategoriService.KategoriListesi().subscribe(rv => {
      this.kategoriList = rv
    })
  }


  ResimGor(event: any) {
    this.yaziKapakResmi = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.resim = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  YaziKaydet() {
    this.yazi.kategoriId = this.kategori.id;
    this.yaziService.YaziEkle(this.yazi, this.yaziKapakResmi).subscribe(rv => {
      if (rv) {
        this.messageService.add({

          severity: "success",
          summary: "Başarılı",
          detail: "Yazı başarıyla eklendi",
        });
        this.yazi=new Yazi();
        this.resim="";
        this.fileUploader.nativeElement.value=null
      } else {
        alert("Hata:" + rv)
      }
    })
  }





}
