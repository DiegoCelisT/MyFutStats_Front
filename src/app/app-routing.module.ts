import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ClubesComponent } from './componentes/clubes/clubes.component';
import { EditclubeComponent } from './componentes/editclube/editclube.component';
import { ClubComponent } from './componentes/club/club.component';
import { AddclubeComponent } from './componentes/addclube/addclube.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'clube/:id', component:ClubComponent },
  { path: 'clubes', component:ClubesComponent },
  { path: 'addclube', component:AddclubeComponent },
  { path: 'editclube/:id', component:EditclubeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
