import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LigaComponent } from './componentes/liga/liga.component';
import { EditclubeComponent } from './componentes/editclube/editclube.component';
import { ClubeComponent } from './componentes/clube/clube.component';
import { AddclubeComponent } from './componentes/addclube/addclube.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'clube/:id', component:ClubeComponent },
  { path: 'liga', component:LigaComponent },
  { path: 'addclube', component:AddclubeComponent },
  { path: 'editclube/:id', component:EditclubeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
