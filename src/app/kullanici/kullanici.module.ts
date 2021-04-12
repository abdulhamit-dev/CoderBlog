import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { KullaniciComponent } from './kullanici.component';
import { KullaniciRoutingModule } from './kullanici-routing.module';

@NgModule({
  declarations: [
    ProfilComponent,
    KullaniciComponent
  ],

  imports: [CommonModule,KullaniciRoutingModule],
})
export class KullaniciModule {}
