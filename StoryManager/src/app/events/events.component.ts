import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  storyID: String;
  events: Event[];

  constructor
    (private eventService: EventService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.storyID = this.activeRoute.snapshot.paramMap.get('storyID');
    this.eventService.getEventsByStory(this.storyID)
      .subscribe(result => this.events = result);
  }

  addEvent(): void {
    this.router.navigate(['stories/' + this.storyID + '/events/new']);
  }

  selectedEvent?: Event;
  onSelect(event: Event) {
    // Route to location details
    this.router.navigate(['stories/' + this.storyID + '/events/' + event._id])
  }
}
