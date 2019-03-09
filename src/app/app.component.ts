import { Component } from "@angular/core";
import { MovieService } from "./model/movie.service";
import { Movies } from "./model/interfaces";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Test for Casenet";
  allMovies;

  constructor(movies: MovieService) {
    this.allMovies = movies.getMovies().subscribe(data => {
      this.allMovies = data;
      console.log(this.allMovies);
    });
  }
}
