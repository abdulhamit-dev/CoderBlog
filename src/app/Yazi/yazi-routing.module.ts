import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { DetayComponent } from './detay/detay.component';
import { TaslakComponent } from './taslak/taslak.component';
import { YaziComponent } from './yazi.component';
import { YazilarimComponent } from './yazilarim/yazilarim.component';
import { YeniYaziComponent } from './yeni-yazi/yeni-yazi.component';

const routes: Routes = [
  {
    path: 'yazi',
    component: YaziComponent,
    children: [
      { path: 'yeni', component: YeniYaziComponent,canActivate:[AuthGuardService]},
      { path: 'yazilarim', component: YazilarimComponent,canActivate:[AuthGuardService] },
      { path: 'taslak', component: TaslakComponent ,canActivate:[AuthGuardService]},
      { path: 'detay/:id', component: DetayComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YaziRoutingModule {}
