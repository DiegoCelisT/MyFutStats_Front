import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClubesComponent } from './clubes/clubes.component';
import { EditclubeComponent } from './editclube/editclube.component'
import { ClubComponent } from './club/club.component';

@NgModule({
  declarations: [
    HomeComponent,
    ClubesComponent,
    EditclubeComponent,
    ClubComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ClubesComponent,
    EditclubeComponent
  ]
})
export class ComponentesModule { }
