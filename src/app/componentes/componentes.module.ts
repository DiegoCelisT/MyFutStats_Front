import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LigaComponent } from './liga/liga.component';
import { EditclubeComponent } from './editclube/editclube.component'
import { ClubComponent } from './club/club.component';
import { AddclubeComponent } from './addclube/addclube.component';

//Módulos para pesquisar e para ordenar:
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    HomeComponent,
    LigaComponent,
    EditclubeComponent,
    ClubComponent,
    AddclubeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  exports: [
    HomeComponent,
    LigaComponent,
    EditclubeComponent,
    ClubComponent,
    AddclubeComponent
  ]
})
export class ComponentesModule { }
