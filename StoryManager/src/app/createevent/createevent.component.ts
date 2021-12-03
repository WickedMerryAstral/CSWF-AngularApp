import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { WebtokenService } from '../webtoken.service';
import { Event } from '../../model/event';


@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private router: Router,
    private webtoken: WebtokenService,
    private activeRoute: ActivatedRoute) {
  }

  storyID: String;

  event: Event;
  eventForm = new FormGroup({
    title: new FormControl('',
      Validators.required),
    description: new FormControl('',
      Validators.required),
    date: new FormControl('',
      Validators.required)
  });

  // Getters for Form.
  get title() {
    return this.eventForm.get('title');
  }
  get description() {
    return this.eventForm.get('description');
  }
  get date() {
    return this.eventForm.get('date');
  }

  ngOnInit(): void {
    this.storyID = this.activeRoute.snapshot.paramMap.get('storyID');
  }

  onSubmit(): void {
    this.event = this.eventForm.value;
    this.eventService.postEvent(this.event, this.storyID)
      .subscribe((result) => {
        this.router.navigate(['stories/' + this.storyID]);
      });
  }

}
