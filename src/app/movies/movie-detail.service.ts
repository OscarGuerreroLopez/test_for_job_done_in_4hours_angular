import { Injectable } from "@angular/core";
import { Movies, MoviesDetail } from "../model/interfaces";

@Injectable({
  providedIn: "root"
})
export class MovieDetailService {
  movieArray: MoviesDetail[] = [];
  movieCount: number;

  constructor() {}

  getMovies(movies: Movies) {
    this.movieCount = movies.count;
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

  getMoviesTable() {
    return this.movieArray;
  }

  getMoviesCount(): number {
    return this.movieCount;
  }
}
