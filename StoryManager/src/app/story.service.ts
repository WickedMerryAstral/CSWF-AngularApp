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
  postStory(story: Story): Observable<any>{
    var ID = story.author._id.replace(/['"]+/g, '');

    return this.http.post(ConnectionString + "/api/stories/", {
      "userID": ID,
      "title": story.title,
      "description": story.description
    }, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
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
