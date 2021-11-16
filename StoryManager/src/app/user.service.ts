import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';

// Temporary mock data.
import { UserSet } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor() {
    // Filling array with temporary mock data.
    this.users = UserSet;
  }

  addUser(u: User) {
    this.users.push(u);
  }

  getUsers(): Observable<User[]> {
    const users = of(this.users);
    return users;
  }
}
