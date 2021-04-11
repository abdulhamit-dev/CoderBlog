import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeniYaziComponent } from './yeni-yazi/yeni-yazi.component';
import { TaslakComponent } from './taslak/taslak.component';
import { YazilarimComponent } from './yazilarim/yazilarim.component';
import { YaziRoutingModule } from './yazi-routing.module';
import { YaziComponent } from './yazi.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { DetayComponent } from './detay/detay.component';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [
    YeniYaziComponent,
    TaslakComponent,
    YazilarimComponent,
    YaziComponent,
    DetayComponent,
  ],
  imports: [
    CommonModule,
    YaziRoutingModule,
    FormsModule,
    BrowserModule, HttpClientModule,

    AccordionModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    TieredMenuModule,
    CardModule,
    InputTextareaModule,
    DropdownModule,
    DialogModule,
    DividerModule,
    EditorModule
  ],
})
export class YaziModule { }
