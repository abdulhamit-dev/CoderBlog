import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  profilItems: MenuItem[];

  ngOnInit(): void {
    this.MenuDataLoad()
    this.ProfilMenuDataLoad()
  }

  MenuDataLoad(){
    this.items = [
      {
        label:'Home',
        icon:'pi pi-fw pi-home',
        routerLink:'home'
      },
      {
          label:'Yazı',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'Yeni',
                  icon:'pi pi-fw pi-save'
              },
              {
                  separator:true
              },

              {
                  label:'Yazılarım',
                  icon:'pi pi-fw pi-external-link'
              },
              {
                label:'Taslak',
                icon:'pi pi-fw pi-external-link'
            }
          ]
      }
    ];
  }
  ProfilMenuDataLoad(){
    this.profilItems = [
      {
        label:'Profil',
        icon:'pi pi-fw pi-user-edit',
        routerLink:'home'
      },
      {
        label:'Ayar',
        icon:'pi pi-fw pi-sliders-h',
        routerLink:'home'
      },
      {
        label:'Çıkış',
        icon:'pi pi-fw pi-power-off',
        routerLink:'home'
      },
      
    ];
  }
}
