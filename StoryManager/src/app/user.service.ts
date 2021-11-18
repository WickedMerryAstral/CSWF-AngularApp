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
