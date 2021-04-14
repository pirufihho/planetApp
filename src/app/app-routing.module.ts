import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';


const routes: Routes = [
  { path: 'planets', component: PlanetsComponent },
  { path: 'home',      component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
