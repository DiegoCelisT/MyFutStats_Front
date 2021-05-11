import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser'; 

import { HomeComponent } from './home/home.component';
import { LigaComponent } from './liga1/liga/liga.component';
import { EditclubeComponent } from './liga1/editclube/editclube.component'
import { ClubeComponent } from './liga1/clube/clube.component';
import { AddclubeComponent } from './liga1/addclube/addclube.component';
import { EditligaComponent } from './liga1/editliga/editliga.component';

import { Liga2Component } from './liga2/liga/liga2.component';
import { Editclube2Component } from './liga2/editclube/editclube2.component'
import { Clube2Component } from './liga2/clube/clube2.component';
import { Addclube2Component } from './liga2/addclube/addclube2.component';
import { Editliga2Component } from './liga2/editliga/editliga2.component';

import { Liga3Component } from './liga3/liga/liga3.component';
import { Editclube3Component } from './liga3/editclube/editclube3.component'
import { Clube3Component } from './liga3/clube/clube3.component';
import { Addclube3Component } from './liga3/addclube/addclube3.component';
import { Editliga3Component } from './liga3/editliga/editliga3.component';

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

    Liga2Component,
    Editclube2Component,
    Clube2Component,
    Addclube2Component,
    Editliga2Component,

    Liga3Component,
    Editclube3Component,
    Clube3Component,
    Addclube3Component,
    Editliga3Component,
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

    Liga2Component,
    Editclube2Component,
    Clube2Component,
    Addclube2Component,
    Editliga2Component,

    Liga3Component,
    Editclube3Component,
    Clube3Component,
    Addclube3Component,
    Editliga3Component,
  ]
})
export class ComponentesModule { }
