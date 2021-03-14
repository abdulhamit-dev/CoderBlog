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

import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { HataComponent } from './hata/hata.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { YaziModule } from './yazi/yazi.module';
import { YaziRoutingModule } from './yazi/yazi-routing.module';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

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
    YaziRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TieredMenuModule,
    CardModule,

    YaziModule,

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
