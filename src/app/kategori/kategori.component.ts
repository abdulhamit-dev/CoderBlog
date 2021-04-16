import { Component, OnInit } from '@angular/core';
import { Kategori } from '../models/kategori/kategori';
import { KategoriService } from '../services/kategori/kategori.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css'],
})
export class KategoriComponent implements OnInit {
  constructor(private kategoriService: KategoriService) {}
  kategoriList: Kategori[] = [];
  ngOnInit(): void {
    this.kategoriService.KategoriListesi().subscribe((rv) => {
      this.kategoriList = rv;
    });
  }

  KategoriListesi() {}
}
