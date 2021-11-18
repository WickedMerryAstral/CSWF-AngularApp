import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, ROLES } from '../../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input() user: User;

  // Services.
  userService: UserService;
  router: Router;

  // Selector variables.
  roles = ROLES;
  keys: any[];

  constructor(
    userService: UserService,
    router: Router) {

    this.userService = userService;
    this.router = router;

    // Populating to use in drop-down selector. Works with User ROLES enum.
    this.keys = Object.keys(this.roles).filter(k => !isNaN(Number(k)));
  }

  ngOnInit(): void {
  }

  RemoveUser(): void {
    console.log(this.user);
    this.userService.deleteUser(this.user);
    this.router.navigate(['users']);
  }
}
