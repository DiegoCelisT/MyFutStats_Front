import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClubesComponent } from './clubes/clubes.component';
import { EditclubeComponent } from './editclube/editclube.component'


@NgModule({
  declarations: [
    HomeComponent,
    ClubesComponent,
    EditclubeComponent
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
