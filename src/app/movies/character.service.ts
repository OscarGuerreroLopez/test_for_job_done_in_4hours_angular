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
    console.log(characters.length);
    return forkJoin(
      characters.map(character => {
        return this.http.get<any>(character);
      })
    );
  }
}

// loadPeople(characters: string[]) {
//   console.log(characters);
//   characters.map(character => {
//     this.getPeople(character).subscribe(
//       data => {
//         console.log(data.name);

//         this.names.push(data.name);
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   });
// }
