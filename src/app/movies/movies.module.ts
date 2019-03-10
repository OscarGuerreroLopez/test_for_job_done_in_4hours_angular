import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app-routing.module";
import { MovieDetailService } from "./movie-detail.service";
import { CharacterService } from "./character.service";
import { MoviesRoutingModule } from "./movies-routing.module";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";

import { HomeComponent } from "./home/home.component";
import { CustomDatePipe } from "./custom-date.pipe";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  declarations: [HomeComponent, CustomDatePipe, DetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModelModule,
    MoviesRoutingModule,
    FormsModule
  ],
  providers: [MovieDetailService, CharacterService]
})
export class MoviesModule {}
