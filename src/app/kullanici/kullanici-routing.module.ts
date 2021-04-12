import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { KullaniciComponent } from './kullanici.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: 'kullanici',
    component: KullaniciComponent,
    children: [
      {
        path: 'profil',
        component: ProfilComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KullaniciRoutingModule {}
