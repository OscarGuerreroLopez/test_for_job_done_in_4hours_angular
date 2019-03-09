import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieDetailService } from "../movie-detail.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  movie: string;

  constructor(
    private route: ActivatedRoute,
    private movieDetail: MovieDetailService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movie = params.get("movie");
    });
    this.movieDetail.getMovieDetail(this.movie);
  }
}
