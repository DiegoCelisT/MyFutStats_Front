import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ClubesComponent } from './componentes/clubes/clubes.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'clubes', component:ClubesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
