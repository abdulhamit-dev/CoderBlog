import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{  BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {TieredMenuModule} from 'primeng/tieredmenu';


import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { HataComponent } from './hata/hata.component';
import { YeniYaziComponent } from './Yazi/yeni-yazi/yeni-yazi.component';
import { TaslakComponent } from './Yazi/taslak/taslak.component';
import { YazilarimComponent } from './Yazi/yazilarim/yazilarim.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    HataComponent,
    YeniYaziComponent,
    TaslakComponent,
    YazilarimComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AccordionModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TieredMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
