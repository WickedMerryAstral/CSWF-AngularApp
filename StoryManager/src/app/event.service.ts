import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Event } from '../model/event';
import { ConnectionString } from './config';
import { WebtokenService } from './webtoken.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient,
    private token: WebtokenService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getJwtToken()
    })
  };

  postEvent(event: Event, storyID: String): Observable<any> {
    return this.http.post(ConnectionString + "/api/events/story/" + storyID, event, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  getEventsByStory(storyID: String): Observable<any> {
    return this.http.get(ConnectionString + "/api/events/story/" + storyID, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }
}
