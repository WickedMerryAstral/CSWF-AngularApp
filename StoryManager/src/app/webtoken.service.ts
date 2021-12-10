import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject, Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class WebtokenService {

  constructor(private cookie: CookieService, private router: Router) { }

  jwtToken: String;
  user: User;

  getJwtToken() {
    return this.cookie.get('jwt');
  }

  getUser(): Observable<User> {
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
    this.router.navigate(['stories']);
  }

  hasUser(): Boolean {
    const result = this.cookie.check('currentuser')
    return result;
  }

  clearUser() {
    this.cookie.deleteAll();
    this.router.navigate(['users/login']);
  }
}
