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

import { Liga4Component } from './componentes/liga4/liga/liga4.component';
import { Editclube4Component } from './componentes/liga4/editclube/editclube4.component'
import { Clube4Component } from './componentes/liga4/clube/clube4.component';
import { Addclube4Component } from './componentes/liga4/addclube/addclube4.component';
import { Editliga4Component } from './componentes/liga4/editliga/editliga4.component';

import { Liga5Component } from './componentes/liga5/liga/liga5.component';
import { Editclube5Component } from './componentes/liga5/editclube/editclube5.component'
import { Clube5Component } from './componentes/liga5/clube/clube5.component';
import { Addclube5Component } from './componentes/liga5/addclube/addclube5.component';
import { Editliga5Component } from './componentes/liga5/editliga/editliga5.component';

import { Liga6Component } from './componentes/liga6/liga/liga6.component';
import { Editclube6Component } from './componentes/liga6/editclube/editclube6.component'
import { Clube6Component } from './componentes/liga6/clube/clube6.component';
import { Addclube6Component } from './componentes/liga6/addclube/addclube6.component';
import { Editliga6Component } from './componentes/liga6/editliga/editliga6.component';

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

  { path: 'liga4', component:Liga4Component },
  { path: 'liga4/clube4/:id', component:Clube4Component },
  { path: 'liga4/addclube4', component:Addclube4Component },
  { path: 'liga4/editclube4/:id', component:Editclube4Component },
  { path: 'liga4/editliga4', component:Editliga4Component },

  { path: 'liga5', component:Liga5Component },
  { path: 'liga5/clube5/:id', component:Clube5Component },
  { path: 'liga5/addclube5', component:Addclube5Component },
  { path: 'liga5/editclube5/:id', component:Editclube5Component },
  { path: 'liga5/editliga5', component:Editliga5Component },

  { path: 'liga6', component:Liga6Component },
  { path: 'liga6/clube6/:id', component:Clube6Component },
  { path: 'liga6/addclube6', component:Addclube6Component },
  { path: 'liga6/editclube6/:id', component:Editclube6Component },
  { path: 'liga6/editliga6', component:Editliga6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
