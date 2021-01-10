import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

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
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class HomeModule { }
