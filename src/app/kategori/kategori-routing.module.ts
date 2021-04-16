import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KategoriComponent } from './kategori.component';
import { DetayComponent } from './detay/detay.component';
import { AuthGuardService } from '../services/auth-guard.service';

const route: Routes = [
  { path: 'kategori', component: KategoriComponent },
  { path: 'kategori/detay/:adi', component: DetayComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class KategoriRoutingModule {}
