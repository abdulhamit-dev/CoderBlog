import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/kullanici/kullanici';
import { AuthGuardService } from '../services/auth-guard.service';
import { LoginService } from '../services/auth/login.service';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[];
  profilItems: MenuItem[];
  aktifKullanici: Observable<boolean>;
  aktifKullaniciBilgi: Observable<Kullanici>;
  kullanici: Kullanici = new Kullanici();
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.aktifKullanici = this.loginService.aktifKullanici;
    this.aktifKullaniciBilgi = this.loginService.aktifKullaniciBilgi;
  }

  ngOnInit(): void {
    this.MenuDataLoad();
    this.ProfilMenuDataLoad();

    this.aktifKullaniciBilgi.subscribe((rv) => {
      this.kullanici = rv;
    });
  }

  MenuDataLoad() {
    this.items = [
      {
        label: '<b>CoderBlog</b>',
        icon: 'fas fa-home',
        routerLink: 'home',
        escape:false

      },
      {
        label: '<b>Kategoriler</b>',
        icon: 'fas fa-layer-group',
        routerLink: 'kategori',
        escape:false
      },
      {
        label: '<b>Yazı</b>',
        icon: 'fas fa-file-signature',
        escape:false,
        items: [
          {
            label: 'Yeni',
            icon: 'fas fa-plus',
            routerLink: 'yazi/yeni',
          },
          {
            separator: true,
          },

          {
            label: 'Yazılarım',
            icon: 'fas fa-stream',
            routerLink: 'yazi/yazilarim',
          },
          {
            label: 'Taslak',
            icon: 'fas fa-thumbtack',
            routerLink: 'yazi/taslak',
          },
        ],
      },
    ];
  }
  ProfilMenuDataLoad() {
    this.profilItems = [
      {
        label: 'Profil',
        icon: 'pi pi-fw pi-user-edit',
        routerLink: 'kullanici/profil',
      },
      {
        label: 'Ayar',
        icon: 'pi pi-fw pi-sliders-h',
        routerLink: 'home',
      },
      {
        label: 'Çıkış',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.Logout(),
      },
    ];
  }

  Login() {
    this.router.navigateByUrl('/login');
  }
  Logout() {
    this.loginService.Cikis();
  }
}
