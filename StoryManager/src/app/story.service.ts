import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebtokenService } from './webtoken.service';
import { ConnectionString } from './config';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient,
    private token: WebtokenService) { }

  postStory() {

  }

  getStoriesByUser(userID: String): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token.getJwtToken()
      })
    };

    return this.http.get(ConnectionString + "/api/stories/users/" + userID, httpOptions)
      .pipe(
        tap(
          error => {
            return error;
          }
        )
      )
  }
}
