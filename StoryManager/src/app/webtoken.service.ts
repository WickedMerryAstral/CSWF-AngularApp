import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class WebtokenService {

  jwtToken: String;
  user: User;

  getJwtToken() {
    return this.jwtToken;
  }

  getUser(): Observable<User>{
    var temp = of(this.user);
    return temp;
  }

  setJwtToken(jwtToken: String) {
    var temp = jwtToken.substring(1, (jwtToken.length - 1));
    this.jwtToken = temp;
  }

  setUser(user: User) {
    console.log(user);
    this.user = user;
  }
}
