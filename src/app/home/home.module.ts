import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent
  }
];

@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class HomeModule { }
