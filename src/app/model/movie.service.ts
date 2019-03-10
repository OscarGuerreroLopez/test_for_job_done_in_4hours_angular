import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Movies } from "./interfaces";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  moviesUrl: string;

  constructor(private http: HttpClient) {
    this.moviesUrl = "https://swapi.co/api/films/";
  }

  getMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.moviesUrl);
  }
}
