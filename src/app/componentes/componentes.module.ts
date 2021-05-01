import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LigasComponent } from './ligas/ligas.component';
import { EditclubeComponent } from './editclube/editclube.component'
import { ClubComponent } from './club/club.component';
import { AddclubeComponent } from './addclube/addclube.component';

@NgModule({
  declarations: [
    HomeComponent,
    LigasComponent,
    EditclubeComponent,
    ClubComponent,
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
    ClubComponent,
    AddclubeComponent
  ]
})
export class ComponentesModule { }
