import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject, Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class WebtokenService {

  constructor(private router: Router) { }

  jwtToken: String;
  user: User;

  getJwtToken() {
    return localStorage.getItem('jwt');
  }

  getUser(): Observable<User> {
    const temp = JSON.parse(localStorage.getItem('currentuser'))
    return of(temp);
  }

  setJwtToken(jwtToken: String) {
    var temp = jwtToken.substring(1, (jwtToken.length - 1));
    localStorage.setItem('jwt', temp);
  }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('currentuser', JSON.stringify(user));
    this.router.navigate(['stories']);
  }

  hasUser(): Observable<Boolean> {
    const result = localStorage.getItem('currentuser');
    if (result !== null) {
      return of(true);
    }
    return of(false);
  }

  clearUser() {
    localStorage.removeItem('currentuser');
    localStorage.removeItem('jwt');
    this.router.navigate(['users/login']);
  }
}
