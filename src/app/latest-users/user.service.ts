import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { empty } from "rxjs/internal/observable/empty";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs/internal/observable/of";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private readonly URL = "https://randomapi.azurewebsites.net/api/users";

  constructor(private http: HttpClient) {}

  getUsers$() {
    return this.http.get<any[]>(this.URL).pipe(
      map(users => users.slice(0, 10)),
      tap(console.log),
      catchError(err => {
        console.log("an error occured", err);
        return empty();
      })
    );
  }
}
