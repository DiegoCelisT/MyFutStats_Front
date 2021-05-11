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

import { Liga4Component } from './liga4/liga/liga4.component';
import { Editclube4Component } from './liga4/editclube/editclube4.component'
import { Clube4Component } from './liga4/clube/clube4.component';
import { Addclube4Component } from './liga4/addclube/addclube4.component';
import { Editliga4Component } from './liga4/editliga/editliga4.component';

import { Liga5Component } from './liga5/liga/liga5.component';
import { Editclube5Component } from './liga5/editclube/editclube5.component'
import { Clube5Component } from './liga5/clube/clube5.component';
import { Addclube5Component } from './liga5/addclube/addclube5.component';
import { Editliga5Component } from './liga5/editliga/editliga5.component';

import { Liga6Component } from './liga6/liga/liga6.component';
import { Editclube6Component } from './liga6/editclube/editclube6.component'
import { Clube6Component } from './liga6/clube/clube6.component';
import { Addclube6Component } from './liga6/addclube/addclube6.component';
import { Editliga6Component } from './liga6/editliga/editliga6.component';

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

    Liga4Component,
    Editclube4Component,
    Clube4Component,
    Addclube4Component,
    Editliga4Component,

    Liga5Component,
    Editclube5Component,
    Clube5Component,
    Addclube5Component,
    Editliga5Component,

    Liga6Component,
    Editclube6Component,
    Clube6Component,
    Addclube6Component,
    Editliga6Component,
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

    Liga4Component,
    Editclube4Component,
    Clube4Component,
    Addclube4Component,
    Editliga4Component,

    Liga5Component,
    Editclube5Component,
    Clube5Component,
    Addclube5Component,
    Editliga5Component,

    Liga6Component,
    Editclube6Component,
    Clube6Component,
    Addclube6Component,
    Editliga6Component,
  ]
})
export class ComponentesModule { }
