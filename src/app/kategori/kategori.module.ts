import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategoriRoutingModule } from './kategori-routing.module';
import { KategoriComponent } from './kategori.component';
import { DetayComponent } from './detay/detay.component';

import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TabViewModule } from 'primeng/tabview';
import { ChipModule } from 'primeng/chip';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [KategoriComponent, DetayComponent],
  imports: [
    CommonModule,
    KategoriRoutingModule,
    CardModule,
    DividerModule,
    BadgeModule,
    TabViewModule,
    ChipModule,
    AvatarModule,
    AvatarGroupModule
  ]
})
export class KategoriModule { }
