import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategoriRoutingModule } from './kategori-routing.module';
import { KategoriComponent } from './kategori/kategori.component';



@NgModule({
  declarations: [KategoriComponent],
  imports: [
    CommonModule,
    KategoriRoutingModule
  ]
})
export class KategoriModule { }
