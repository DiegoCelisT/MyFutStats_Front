import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';

import { LigaComponent } from './componentes/ligas/liga/liga.component';
import { EditclubeComponent } from './componentes/ligas/editclube/editclube.component';
import { ClubeComponent } from './componentes/ligas/clube/clube.component';
import { AddclubeComponent } from './componentes/ligas/addclube/addclube.component';
import { EditligaComponent } from './componentes/ligas/editliga/editliga.component';

import { NotFoundComponent } from './componentes/not-found/not-found.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'liga/:idLiga/clube/:id', component:ClubeComponent },
  { path: 'liga/:idLiga', component:LigaComponent },
  { path: 'liga/:idLiga/addclube', component:AddclubeComponent },
  { path: 'liga/:idLiga/editclube/:id', component:EditclubeComponent },
  { path: 'liga/:idLiga/editliga', component:EditligaComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
