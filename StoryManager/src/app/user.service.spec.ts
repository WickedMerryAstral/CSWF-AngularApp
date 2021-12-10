import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ROLES, User } from '../model/user';

import { UserService } from './user.service';

// Mock user data
const mockUserData: User = {
  _id: '61b377d178a505c6373a15a7',
  username: "TESTUSER",
  password: "TESTUSER",
  stories: [],
  role: ROLES.USER
};

describe('UserService', () => {

  let service: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
