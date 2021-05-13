import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';

import { LigaComponent } from './componentes/liga1/liga/liga.component';
import { EditclubeComponent } from './componentes/liga1/editclube/editclube.component';
import { ClubeComponent } from './componentes/liga1/clube/clube.component';
import { AddclubeComponent } from './componentes/liga1/addclube/addclube.component';
import { EditligaComponent } from './componentes/liga1/editliga/editliga.component';

import { Editclube2Component } from './componentes/liga2/editclube/editclube2.component';

import { Editclube3Component } from './componentes/liga3/editclube/editclube3.component';

import { Editclube4Component } from './componentes/liga4/editclube/editclube4.component'

import { Editclube5Component } from './componentes/liga5/editclube/editclube5.component'

import { Editclube6Component } from './componentes/liga6/editclube/editclube6.component'

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'liga/:idLiga/clube/:id', component:ClubeComponent },
  { path: 'liga/:idLiga', component:LigaComponent },
  { path: 'liga/:idLiga/addclube', component:AddclubeComponent },
  { path: 'liga/:idLiga/editclube/:id', component:EditclubeComponent },
  { path: 'liga/:idLiga/editliga', component:EditligaComponent },

  { path: 'liga2/editclube/:id', component:Editclube2Component },

  { path: 'liga3/editclube/:id', component:Editclube3Component },

  { path: 'liga4/editclube/:id', component:Editclube4Component },

  { path: 'liga5/editclube/:id', component:Editclube5Component },

  { path: 'liga6/editclube/:id', component:Editclube6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
