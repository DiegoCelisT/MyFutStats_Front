import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';

import { LigaComponent } from './componentes/liga1/liga/liga.component';
import { EditclubeComponent } from './componentes/liga1/editclube/editclube.component';
import { ClubeComponent } from './componentes/liga1/clube/clube.component';
import { AddclubeComponent } from './componentes/liga1/addclube/addclube.component';
import { EditligaComponent } from './componentes/liga1/editliga/editliga.component';

import { Liga2Component } from './componentes/liga2/liga/liga2.component';
import { Editclube2Component } from './componentes/liga2/editclube/editclube2.component';
import { Clube2Component } from './componentes/liga2/clube/clube2.component';
import { Addclube2Component } from './componentes/liga2/addclube/addclube2.component';
import { Editliga2Component } from './componentes/liga2/editliga/editliga2.component';

import { Liga3Component } from './componentes/liga3/liga/liga3.component';
import { Editclube3Component } from './componentes/liga3/editclube/editclube3.component';
import { Clube3Component } from './componentes/liga3/clube/clube3.component';
import { Addclube3Component } from './componentes/liga3/addclube/addclube3.component';
import { Editliga3Component } from './componentes/liga3/editliga/editliga3.component';
const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'liga1/clube/:id', component:ClubeComponent },
  { path: 'liga1', component:LigaComponent },
  { path: 'liga1/addclube', component:AddclubeComponent },
  { path: 'liga1/editclube/:id', component:EditclubeComponent },
  { path: 'liga1/editliga', component:EditligaComponent },

  { path: 'liga2', component:Liga2Component },
  { path: 'liga2/clube2/:id', component:Clube2Component },
  { path: 'liga2/addclube2', component:Addclube2Component },
  { path: 'liga2/editclube2/:id', component:Editclube2Component },
  { path: 'liga2/editliga2', component:Editliga2Component },

  { path: 'liga3', component:Liga3Component },
  { path: 'liga3/clube3/:id', component:Clube3Component },
  { path: 'liga3/addclube3', component:Addclube3Component },
  { path: 'liga3/editclube3/:id', component:Editclube3Component },
  { path: 'liga3/editliga3', component:Editliga3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
