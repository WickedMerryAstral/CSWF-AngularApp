import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// Temporary mock data.
import { UserSet } from './mock-users';
import { ConnectionString } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    // Filling array with temporary mock data.
    this.users = UserSet;
  }


  login(user: User): Observable<any> {
    return this.http.post(ConnectionString + '/api/users/login', user, this.httpOptions)
      .pipe(
        tap(
          error => {
            return error;
          }
        )
      );
  }

  register(user: User): Observable<any> {
    return this.http.post(ConnectionString + '/api/users/', user, this.httpOptions)
      .pipe(
        tap(
          error => {
            return error;
          }
        )
      );
  }

  addUser(u: User) : void {
    this.users.push(u);
  }

  getUsers(): Observable<User[]> {
    const users = of(this.users);
    return users;
  }

  deleteUser(u: User): void {
    // Splicing array. Changes later when working with back-end.
    this.users.forEach((value, index) => {
      if (value._id == u._id) this.users.splice(index, 1);
    });
  }

  updateUser(u: User): void {
  }
}
