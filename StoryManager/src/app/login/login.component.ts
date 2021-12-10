import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../user.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl('',
      Validators.required),
    password: new FormControl('',
      Validators.required)
  });
  get username() {
    return this.userForm.get('username');
  };
  get password() {
    return this.userForm.get('password');
  };

  user: User;
  requestResult: String;

  constructor(private router: Router,
    private userService: UserService,
    private webtoken: WebtokenService) { }

  ngOnInit(): void {

  };

  onSubmit() {
    if (this.userForm.valid) {
      this.user = this.userForm.value;

      this.userService.login(this.user).subscribe(
        (result) => {
          // Setting the JWT token and the user.
          var temp = JSON.stringify(result.token);
          this.webtoken.setJwtToken(temp);
          var tempUser: User;
          tempUser = new User();
          tempUser.username = JSON.stringify(result.username);
          tempUser._id = JSON.stringify(result.userid);
          this.webtoken.setUser(tempUser);
        }, err => {
          var temp = JSON.stringify(err.error.Message);
          this.requestResult = temp;
        }
      );
    }
  };
}
