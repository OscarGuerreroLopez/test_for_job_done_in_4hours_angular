import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  // since we don't know how many calls we are going to make to the API best option
  // I could think of was to use forkJoin.

  loadPeople(characters: string[]): Observable<any[]> {
    return forkJoin(
      characters.map(character => {
        return this.http.get<any>(character);
      })
    );
  }
}
