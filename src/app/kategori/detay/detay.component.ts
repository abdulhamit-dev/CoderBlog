import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css'],
})
export class DetayComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  sonuc: any;

  ngOnInit(): void {
    this.sonuc = this.route.snapshot.paramMap.get('adi');
  }
}
