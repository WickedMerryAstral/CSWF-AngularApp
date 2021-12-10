import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROLES, User } from '../../model/user';
import { UserService } from '../user.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  // User object and form specifications.
  user: User;
  userForm = new FormGroup({
    username: new FormControl('',
      Validators.required),
    password: new FormControl('',
      Validators.required),
  });

  // Injected services.
  userService: UserService;
  router: Router;

  // Getters for Form.
  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password');
  }

  constructor(
    userService: UserService,
    router: Router,
    private webtoken: WebtokenService) {
    this.userService = userService;
    this.router = router;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.user = this.userForm.value;

      // New Users get the User role by default.
      this.user.role = ROLES.USER;

      this.userService.register(this.user)
        .subscribe(result => {
          // Setting user upon registering
          this.webtoken.setUser(this.user);
          this.router.navigate(['users/login']);
        });
    }
  }
}
