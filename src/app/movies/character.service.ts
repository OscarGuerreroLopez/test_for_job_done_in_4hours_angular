import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  loadPeople(characters: string[]): Observable<any[]> {
    return forkJoin(
      characters.map(character => {
        return this.http.get<any>(character);
      })
    );
  }
}
