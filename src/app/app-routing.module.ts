import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';

import { LigaComponent } from './componentes/liga1/liga/liga.component';
import { EditclubeComponent } from './componentes/liga1/editclube/editclube.component';
import { ClubeComponent } from './componentes/liga1/clube/clube.component';
import { AddclubeComponent } from './componentes/liga1/addclube/addclube.component';
import { EditligaComponent } from './componentes/liga1/editliga/editliga.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'liga/:idLiga/clube/:id', component:ClubeComponent },
  { path: 'liga/:idLiga', component:LigaComponent },
  { path: 'liga/:idLiga/addclube', component:AddclubeComponent },
  { path: 'liga/:idLiga/editclube/:id', component:EditclubeComponent },
  { path: 'liga/:idLiga/editliga', component:EditligaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
