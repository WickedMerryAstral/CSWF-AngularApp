import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../model/user';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loggedIn: Boolean;
  user: User;
  message?: String;

  constructor(private webtoken: WebtokenService, private router: Router, private cookie: CookieService) { }
  ngOnInit(): void {

    this.loggedIn = false;
    // Subscribing to the current active user from the webtoken singleton.
    this.webtoken.getUser()
      .subscribe(result => {
        this.user = result;
      })

    if (this.webtoken.hasUser) {
      this.loggedIn = true;
      this.message = "Welcome, " + this.user.username; + "!";
      this.message = this.message.replace(/['"]+/g, '');
    };
  }

  logOut(): void {
    this.cookie.delete('currentuser');
    this.cookie.delete('jwt');
    window.location.reload();
  }
}
