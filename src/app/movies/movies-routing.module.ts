import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path: "movies",
    component: HomeComponent
  },
  {
    path: "movies/details/:movie",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
