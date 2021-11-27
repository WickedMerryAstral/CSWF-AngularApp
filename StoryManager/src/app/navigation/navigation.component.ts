import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: User;

  constructor(private webtoken: WebtokenService) { }

  ngOnInit(): void {
    // Subscribing to the current active user from the webtoken singleton.
    this.webtoken.getUser()
      .subscribe(result => this.user = result);
  }
}
