import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LigasComponent } from './ligas/ligas.component';
import { EditclubeComponent } from './editclube/editclube.component'
import { ClubeComponent } from './clube/clube.component';
import { AddclubeComponent } from './addclube/addclube.component';

@NgModule({
  declarations: [
    HomeComponent,
    LigasComponent,
    EditclubeComponent,
    ClubeComponent,
    AddclubeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    LigasComponent,
    EditclubeComponent,
    ClubeComponent,
    AddclubeComponent
  ]
})
export class ComponentesModule { }
