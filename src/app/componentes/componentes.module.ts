import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LigaComponent } from './liga/liga.component';
import { EditclubeComponent } from './editclube/editclube.component'
import { ClubeComponent } from './clube/clube.component';
import { AddclubeComponent } from './addclube/addclube.component';
import { EditligaComponent } from './editliga/editliga.component';

@NgModule({
  declarations: [
    HomeComponent,
    LigaComponent,
    EditclubeComponent,
    ClubeComponent,
    AddclubeComponent,
    EditligaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    LigaComponent,
    EditclubeComponent,
    ClubeComponent,
    AddclubeComponent,
    EditligaComponent
  ]
})
export class ComponentesModule { }
