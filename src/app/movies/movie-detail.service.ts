import { Injectable } from "@angular/core";
import { Movies, MoviesDetail } from "../model/interfaces";

@Injectable({
  providedIn: "root"
})
export class MovieDetailService {
  movieArray: MoviesDetail[] = [];

  constructor() {}

  // get what I need and short it

  getMovies(movies: Movies) {
    this.movieArray = movies.results
      .map(movie => {
        return {
          title: movie.title,
          episode_id: movie.episode_id,
          opening_crawl: movie.opening_crawl,
          director: movie.director,
          producer: movie.producer,
          release_date: movie.release_date,
          characters: movie.characters,
          planets: movie.planets,
          starships: movie.starships,
          vehicles: movie.vehicles,
          species: movie.species,
          created: movie.created,
          edited: movie.edited,
          url: movie.url
        };
      })
      .sort(this.compare);
  }
  compare(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  // returns a pretty array with just the information needed ans sorted by title
  getMoviesTable() {
    return this.movieArray;
  }

  // get the information about a movie, since we have it on an array already works much faster than
  // requesting the information from the server
  getMovieDetail(movie): MoviesDetail {
    const movieData = this.movieArray.find(film => {
      return film.title === movie;
    });

    return movieData;
  }
}
