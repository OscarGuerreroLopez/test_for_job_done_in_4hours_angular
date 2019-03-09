import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app-routing.module";
import { MovieDetailService } from "./movie-detail.service";
import { MoviesRoutingModule } from "./movies-routing.module";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { CustomDatePipe } from "./custom-date.pipe";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  declarations: [HomeComponent, CustomDatePipe, DetailsComponent],
  imports: [CommonModule, AppRoutingModule, MoviesRoutingModule, FormsModule],
  providers: [MovieDetailService]
})
export class MoviesModule {}
