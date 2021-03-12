import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HataComponent } from './hata/hata.component';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'',component:HomeComponent},
{path:'**',component:HataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
