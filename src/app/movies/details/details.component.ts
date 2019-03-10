import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieDetailService } from "../movie-detail.service";
import { CharacterService } from "../character.service";
import { MoviesDetail } from "../../model/interfaces";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  movie: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private movieDetail: MovieDetailService,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movie = params.get("movie");
    });
    this.getValues(this.movieDetail.getMovieDetail(this.movie));
  }

  getValues(movieDetails: MoviesDetail) {
    this.opening_crawl = movieDetails.opening_crawl;
    this.director = movieDetails.director;
    this.producer = movieDetails.producer;
    this.release_date = movieDetails.release_date;
    this.characters = movieDetails.characters;

    this.characterService.loadPeople(this.characters).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
