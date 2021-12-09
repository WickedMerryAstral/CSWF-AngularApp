import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject, Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class WebtokenService {

  constructor(private cookie: CookieService) { }

  jwtToken: String;
  user: User;

  getJwtToken() {
    return this.cookie.get('jwt');
  }

  getUser(): Observable<User> {
    console.log(this.cookie.get('currentuser'));
    const temp = JSON.parse(this.cookie.get('currentuser'));
    return of(temp);
  }

  setJwtToken(jwtToken: String) {
    var temp = jwtToken.substring(1, (jwtToken.length - 1));
    this.cookie.set('jwt', temp);
  }

  setUser(user: User) {
    this.user = user;
    console.log(user);
    this.cookie.set('currentuser', JSON.stringify(user));
  }

  hasUser(): Boolean {
    const result = this.cookie.check('currentuser')
    return result;
  }

  clearUser() {
    this.cookie.deleteAll();
  }
}
