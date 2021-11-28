import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebtokenService } from './webtoken.service';
import { ConnectionString } from './config';
import { Observable, tap } from 'rxjs';
import { Story } from '../model/story';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token.getJwtToken()
    })
  };

  constructor(private http: HttpClient,
    private token: WebtokenService) { }

  // Adding a story to the currently active user.
  postStory(story: Story) : Observable<any>{
    console.log(story);

    return this.http.post(ConnectionString + "/api/stories/users/" + story.author._id, story, this.httpOptions)
      .pipe(
        tap(
          error => {
            return error;
          }
        )
      )
  }

  // Getting stories for a given users.
  getStoriesByUser(userID: String): Observable<any> {
    return this.http.get(ConnectionString + "/api/stories/users/" + userID, this.httpOptions)
      .pipe(
        tap(
          error => {
            return error;
          }
        )
      )
  }

  getStories(): Observable<any> {
    return this.http.get(ConnectionString + "/api/stories/", this.httpOptions)
      .pipe(
        tap(
          error => {
            return error;
          }
        )
      )
  }
}
