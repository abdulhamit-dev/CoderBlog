import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeniYaziComponent } from './yeni-yazi/yeni-yazi.component';
import { TaslakComponent } from './taslak/taslak.component';
import { YazilarimComponent } from './yazilarim/yazilarim.component';
import { YaziRoutingModule } from './yazi-routing.module';
import { YaziComponent } from './yazi.component';

@NgModule({
  declarations: [YeniYaziComponent, TaslakComponent, YazilarimComponent,YaziComponent],
  imports: [
    CommonModule,
    YaziRoutingModule
  ]
})
export class YaziModule { }
