import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Character } from '../model/character';
import { ConnectionString } from './config';
import { WebtokenService } from './webtoken.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private token: WebtokenService, private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getJwtToken()
    })
  };

  postCharacterToEvent(chara: Character, eventID: String): Observable<any> {
    return this.http.post(ConnectionString + "/api/characters/event/" + eventID, chara, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  postCharacterToLocation(chara: Character, locationID: String): Observable<any> {
    return this.http.post(ConnectionString + "/api/characters/location/" + locationID, chara, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  getCharacter(charaID: String): Observable<any> {
    return this.http.get(ConnectionString + "/api/characters/" + charaID, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  getCharactersByEvent(eventID: String): Observable<any> {
    return this.http.get(ConnectionString + "/api/characters/event/" + eventID, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  getCharactersByLocation(locationID: String): Observable<any> {
    return this.http.get(ConnectionString + "/api/characters/location/" + locationID, this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  updateCharacter(chara: Character): Observable<any> {
    return this.http.put(ConnectionString + "/api/characters/" + chara._id,
      {
        "name": chara.name,
        "pronouns": chara.pronouns,
        "description": chara.description,
        "birthdate": chara.birthdate
      }
      , this.httpOptions)
      .pipe(
        tap(
          error => {
            console.log(error);
            return error;
          }
        )
      )
  }

  removeCharacter(charaID: String): Observable<any> {
    return this.http.delete(ConnectionString + "/api/characters/" + charaID, this.httpOptions)
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
