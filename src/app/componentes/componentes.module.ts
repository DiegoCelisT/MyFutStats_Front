import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClubesComponent } from './clubes/clubes.component';


@NgModule({
  declarations: [
    HomeComponent,
    ClubesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ClubesComponent
  ]
})
export class ComponentesModule { }
