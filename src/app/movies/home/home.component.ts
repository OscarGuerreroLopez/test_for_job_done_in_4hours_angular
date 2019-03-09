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
  moviesPerPage = 5;
  pageSelected = 1;

  constructor(
    private movies: MovieService,
    private movieDetail: MovieDetailService
  ) {
    movies.getMovies().subscribe(
      data => {
        movieDetail.getMovies(data);
        this.movieTable = movieDetail.getMoviesTable();
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.error = error;
        this.showError = true;
      }
    );
  }

  ngOnInit() {
    this.loading = true;
  }

  get displayMovies() {
    const pageIndex = (this.pageSelected - 1) * this.moviesPerPage;
    return this.movieTable.slice(pageIndex, pageIndex + this.moviesPerPage);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.movieTable.length / this.moviesPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePage(newPage: number) {
    this.pageSelected = newPage;
  }

  selectedMovie(movie: string) {
    // console.log(movie);
  }
}
