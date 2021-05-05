import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser'; 

import { HomeComponent } from './home/home.component';
import { LigaComponent } from './liga/liga.component';
import { EditclubeComponent } from './editclube/editclube.component'
import { ClubeComponent } from './clube/clube.component';
import { AddclubeComponent } from './addclube/addclube.component';
import { EditligaComponent } from './editliga/editliga.component';

//Módulos para pesquisar e para ordenar:
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

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
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    OrderModule
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
