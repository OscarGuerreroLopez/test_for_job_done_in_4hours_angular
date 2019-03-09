import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app-routing.module";
import { MovieDetailService } from "./movie-detail.service";

import { HomeComponent } from "./home/home.component";
import { CustomDatePipe } from "./custom-date.pipe";

@NgModule({
  declarations: [HomeComponent, CustomDatePipe],
  imports: [CommonModule, AppRoutingModule],
  providers: [MovieDetailService]
})
export class MoviesModule {}
