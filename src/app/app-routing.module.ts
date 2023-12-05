import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { ModifComponent } from './modif/modif.component';
import { FootComponent } from './foot/foot.component';


const routes: Routes = [
  {path:'ajouter' ,component:AjoutComponent},
  {path:'list',component:ListComponent},
  {path:'modifier/:id',component:ModifComponent},
  {path:'foot',component:FootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
