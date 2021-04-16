import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategoriRoutingModule } from './kategori-routing.module';
import { KategoriComponent } from './kategori.component';
import { DetayComponent } from './detay/detay.component';

import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [KategoriComponent, DetayComponent],
  imports: [
    CommonModule,
    KategoriRoutingModule,
    CardModule
  ]
})
export class KategoriModule { }
