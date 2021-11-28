import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  username: String = new String();
  userID: String = new String();
  
  constructor(private webtoken: WebtokenService) { }

  ngOnInit(): void {
    this.webtoken.getUser()
      .subscribe(result => {
        this.username = result.username;
        this.userID = result._id;
      });
  }
}
