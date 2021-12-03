import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebtokenService } from './webtoken.service';
import { ConnectionString } from './config';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getJwtToken()
    })
  };

  constructor(
    private token: WebtokenService,
    private http: HttpClient) { }

  getLocationsByStory(storyID: String): Observable<any> {
    return this.http.get(ConnectionString + "/api/locations/story/" + storyID, this.httpOptions)
      .pipe(
        tap(
          error => {
            return error;
          }
        )
      )
  }

  getLocation(locationID: String): Observable<any> {
    return this.http.get(ConnectionString + "/api/locations/" + locationID, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  postLocation(location: Location, storyID: String): Observable<any> {
    return this.http.post(ConnectionString + "/api/locations/story/" + storyID, location, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  updateLocation(location: Location): Observable<any> {
    return this.http.put(ConnectionString + "/api/locations/" + location._id, {
      "title": location.title,
      "description": location.description,
      "place": location.place
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

  removeLocation(location: Location): Observable<any> {
    return this.http.delete(ConnectionString + "/api/locations/" + location._id, this.httpOptions)
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
