import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../model/movie.service";
import { Movies } from "../../model/interfaces";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  allMovies;
  loading: boolean;

  constructor(movies: MovieService) {
    this.allMovies = movies.getMovies().subscribe(data => {
      this.allMovies = data;
      this.loading = false;
      console.log(this.allMovies);
    });
  }

  ngOnInit() {
    this.loading = true;
  }
}
