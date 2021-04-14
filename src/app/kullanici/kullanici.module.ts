import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { KullaniciComponent } from './kullanici.component';
import { KullaniciRoutingModule } from './kullanici-routing.module';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfilComponent, KullaniciComponent],

  imports: [
    CommonModule,
    KullaniciRoutingModule,
    FormsModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
  ],
})
export class KullaniciModule {}
