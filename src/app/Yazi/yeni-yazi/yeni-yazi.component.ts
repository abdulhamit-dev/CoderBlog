import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Kategori } from 'src/app/models/yazi/kategori';
import { Yazi } from 'src/app/models/yazi/yazi';
import { KategoriService } from 'src/app/services/yazi/kategori.service';
import { YaziService } from 'src/app/services/yazi/yazi.service';

@Component({
  selector: 'app-yeni-yazi',
  templateUrl: './yeni-yazi.component.html',
  styleUrls: ['./yeni-yazi.component.css']
})
export class YeniYaziComponent implements OnInit {

  constructor(private yaziService: YaziService, private kategoriService: KategoriService) { }
  yazi: Yazi = new Yazi()
  kategori: Kategori = new Kategori();
  kategoriList: Kategori[] = [];
  resim: string;
  yaziKapakResmi: File;
  ngOnInit(): void {
    this.kategoriService.KategoriListesi().subscribe(rv => {
      this.kategoriList = rv
    })
  }

  // Kaydet() {
  //   this.yazi.kategoriId = this.kategori.id
  //   this.yaziService.YaziEkle(this.yazi).subscribe(x => {
  //     if (x) {
  //       alert('Kayıt Başarılı')

  //     } else {
  //       alert('Kayıt Başarısız')
  //     }
  //   })
  // }

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
    this.yaziService.YaziEkle(this.yazi,this.yaziKapakResmi).subscribe(rv => {
      
    })
  }



  // ResimYukle(files: any) {

  //   let fileToUpload = <File>files[0];
  //   const formData = new FormData();

  //   formData.append('file', fileToUpload, fileToUpload.name);
  //   formData.append('yazi', "deger", "deger1");

  //   this.yaziService.ResimYukle(formData).subscribe(event => {
  //     if (event.type === HttpEventType.UploadProgress)
  //       console.log(Math.round(100 * event.loaded / event.total!))
  //     else if (event.type === HttpEventType.Response) {
  //       console.log('Upload success.');
  //     }
  //   });
  // }

}
