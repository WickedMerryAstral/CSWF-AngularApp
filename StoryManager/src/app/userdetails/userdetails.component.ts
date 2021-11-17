import { Component, Input, OnInit } from '@angular/core';
import { User, ROLES } from '../../model/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input() user: User;

  // Selector variables.
  roles = ROLES;
  keys: any[];

  constructor() {
    // Populating to use in drop-down selector. Works with User ROLES enum.
    this.keys = Object.keys(this.roles).filter(k => !isNaN(Number(k)));
  }

  ngOnInit(): void {
  }
}
