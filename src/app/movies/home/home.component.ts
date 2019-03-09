import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../model/movie.service";
import { MovieDetailService } from "../movie-detail.service";
import { MovieTable } from "../../model/interfaces";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loading: boolean;
  error;
  showError = false;
  movieTable: MovieTable[] = [];
  movieCount: number;

  constructor(
    private movies: MovieService,
    private movieDetail: MovieDetailService
  ) {
    movies.getMovies().subscribe(
      data => {
        this.loading = false;
        movieDetail.getMovies(data);
        this.movieTable = movieDetail.getMoviesTable();
        this.movieCount = this.movieDetail.getMoviesCount();
      },
      error => {
        this.error = error;
        this.showError = true;
        this.loading = false;
      }
    );
  }

  ngOnInit() {
    this.loading = true;
  }
}
