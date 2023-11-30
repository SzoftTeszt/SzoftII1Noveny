import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantsListComponent } from './plants-list/plants-list.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"plants", component:PlantsListComponent},
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
