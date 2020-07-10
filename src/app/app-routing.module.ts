import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';


const appRoutes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full"},
  { path: "about", component: AboutMeComponent},
  { path: "projects", component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
