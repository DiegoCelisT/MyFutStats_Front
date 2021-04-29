import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClubesComponent } from './clubes/clubes.component';
import { EditclubeComponent } from './editclube/editclube.component'
import { ClubComponent } from './club/club.component';
import { AddclubeComponent } from './addclube/addclube.component';

@NgModule({
  declarations: [
    HomeComponent,
    ClubesComponent,
    EditclubeComponent,
    ClubComponent,
    AddclubeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ClubesComponent,
    EditclubeComponent,
    ClubComponent,
    AddclubeComponent
  ]
})
export class ComponentesModule { }
