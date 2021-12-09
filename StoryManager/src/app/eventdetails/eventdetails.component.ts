import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../model/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  pipe = new DatePipe('en-US');

  event: Event;
  storyID: String;
  eventID: String;

  constructor(
    private eventService: EventService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

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
    this.eventID = this.activeRoute.snapshot.paramMap.get('eventID');

    this.eventService.getEvent(this.eventID)
      .subscribe(result => {
        this.event = result

        const temp = this.event.date;
        const displayDate = this.pipe.transform(temp, 'yyyy-MM-dd');

        this.eventForm.patchValue({ date: displayDate });
      });
    // Get specific locations, do the same for events, etc.
  }

  removeEvent(): void {
    if (confirm("Are you sure you want to delete " + this.event.title + "?")) {
      this.eventService.removeEvent(this.eventID)
        .subscribe(result => {
          this.router.navigate(['stories/' + this.storyID]);
        });
    }
  }

  updateEvent(): void {
    if (this.eventForm.valid) {
      this.eventService.updateEvent(this.event)
        .subscribe(result => {
          this.router.navigate(['stories/' + this.storyID]);
        });
    }
  }
}
