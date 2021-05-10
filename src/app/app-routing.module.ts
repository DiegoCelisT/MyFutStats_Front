import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { LigaComponent } from './componentes/liga/liga.component';
import { EditclubeComponent } from './componentes/editclube/editclube.component';
import { ClubeComponent } from './componentes/clube/clube.component';
import { AddclubeComponent } from './componentes/addclube/addclube.component';
import { EditligaComponent } from './componentes/editliga/editliga.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'liga1/clube/:id', component:ClubeComponent },
  { path: 'liga1', component:LigaComponent },
  { path: 'liga1/addclube', component:AddclubeComponent },
  { path: 'liga1/editclube/:id', component:EditclubeComponent },
  { path: 'liga1/editliga', component:EditligaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
