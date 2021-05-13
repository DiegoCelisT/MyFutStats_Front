import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser'; 

import { HomeComponent } from './home/home.component';
import { LigaComponent } from './ligas/liga/liga.component';
import { EditclubeComponent } from './ligas/editclube/editclube.component'
import { ClubeComponent } from './ligas/clube/clube.component';
import { AddclubeComponent } from './ligas/addclube/addclube.component';
import { EditligaComponent } from './ligas/editliga/editliga.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { AboutUsComponent } from './about-us/about-us.component';

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
    EditligaComponent,
    NotFoundComponent,
    AboutUsComponent
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
    EditligaComponent,
    NotFoundComponent,
    AboutUsComponent
  ]
})
export class ComponentesModule { }
