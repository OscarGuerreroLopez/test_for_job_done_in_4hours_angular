import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HomeComponent as Movies } from "./movies/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies",
    component: Movies
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
