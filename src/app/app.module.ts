import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TabViewModule } from 'primeng/tabview';
import { ChipModule } from 'primeng/chip';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { HataComponent } from './hata/hata.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { YaziModule } from './yazi/yazi.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KullaniciModule } from './kullanici/kullanici.module';
import { KategoriModule } from './kategori/kategori.module';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    HataComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YaziModule,
    KullaniciModule,
    KategoriModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TieredMenuModule,
    CardModule,
    DividerModule,
    BadgeModule,
    TabViewModule,
    ChipModule,
    AvatarModule,
    AvatarGroupModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        disallowedRoutes: [],
      },
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
