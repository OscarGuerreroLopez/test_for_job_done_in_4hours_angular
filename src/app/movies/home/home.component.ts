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
  searchMovie: string;
  movieTableSearch: MovieTable[] = [];
  showSearch = true;

  constructor(
    private moviesService: MovieService, // Just gets the data from api
    private movieDetailService: MovieDetailService // process de data
  ) {
    moviesService.getMovies().subscribe(
      data => {
        movieDetailService.getMovies(data); // Here I process the data a create an ordered by name array
        this.movieTable = movieDetailService.getMoviesTable(); // Gets an array with the movie data ordered by name
        this.loading = false; // Just shows the results when ready
      },
      error => {
        this.loading = false;
        this.error = error;
        this.showError = true;
      }
    );
  }

  ngOnInit() {
    this.loading = true; // Show loading page until I get data from the API
  }

  get displayMovies() {
    let count = 0;
    const pageIndex = (this.pageSelected - 1) * this.moviesPerPage;
    this.movieTableSearch = [];

    if (this.searchMovie) {
      // the user typed somerthing in the search box
      count = this.searchMovie.length;
      this.movieTable.map(movie => {
        if (
          movie.title.substring(0, count).toLocaleLowerCase() ===
          this.searchMovie.toLocaleLowerCase()
        ) {
          this.movieTableSearch.push(movie); // maybe better to use spread operator
        }
      });

      return this.movieTableSearch.slice(
        pageIndex,
        pageIndex + this.moviesPerPage
      );
    }
    // if the user havent't used the search box then return the original array
    return this.movieTable.slice(pageIndex, pageIndex + this.moviesPerPage);
  }

  // little trick to see how many buttons we need
  get pageNumbers(): number[] {
    if (this.searchMovie) {
      return Array(Math.ceil(this.movieTableSearch.length / this.moviesPerPage))
        .fill(0)
        .map((x, i) => i + 1);
    }
    return Array(Math.ceil(this.movieTable.length / this.moviesPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  // force user to make the search from page 1
  changePage(newPage: number) {
    this.pageSelected = newPage;
    if (newPage !== 1) {
      this.showSearch = false;
    } else {
      this.showSearch = true;
    }
  }
}
