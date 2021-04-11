import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kullanici } from 'src/app/models/kullanici/kullanici';
import { LoginService } from 'src/app/services/auth/login.service';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  kullanici: Kullanici = new Kullanici();
  yeniKullanici: Kullanici = new Kullanici();
  constructor(
    private loginService: LoginService,
    private registerService: RegisterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  returnUrl: string;
  ngOnInit(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('kullanici');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  GirisYap() {
    this.loginService.Giris(this.kullanici).subscribe((res) => {
      const token = (<any>res).token;
      localStorage.setItem('jwt', token);
      localStorage.setItem('kullanici', JSON.stringify(this.kullanici));
      if (token != 'Hatalı kullanıcı') {
        this.router.navigateByUrl(this.returnUrl);

      }
    });
  }

  KayitYap() {
    
    this.registerService.Kayit(this.yeniKullanici).subscribe(x => {
      if(x){
        alert("Kayıt başarılı giriş yapabilirsiniz");
      }
    });
  }
}
