import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../../model/location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-locationdetails',
  templateUrl: './locationdetails.component.html',
  styleUrls: ['./locationdetails.component.css']
})
export class LocationdetailsComponent implements OnInit {
  storyID: String;
  locationID: String;

  location: Location;
  locationForm = new FormGroup({
    title: new FormControl('',
      Validators.required),
    description: new FormControl('',
      Validators.required),
    place: new FormControl('',
      Validators.required)
  });

  // Getters for Form.
  get title() {
    return this.locationForm.get('title');
  }
  get description() {
    return this.locationForm.get('description');
  }
  get place() {
    return this.locationForm.get('place');
  }

  constructor(
    private locationService: LocationService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.storyID = this.activeRoute.snapshot.paramMap.get("storyID");
    this.locationID = this.activeRoute.snapshot.paramMap.get("locationID");

    this.locationService.getLocation(this.locationID)
      .subscribe(result => this.location = result);
    // Get specific locations, do the same for events, etc.
  }

  removeLocation(): void {
    if (confirm("Are you sure you want to delete " + this.location.title + "?")) {
      this.locationService.removeLocation(this.location)
        .subscribe(result => {
          this.router.navigate(['stories' + this.storyID]);
        });
    }
  }

  updateLocation(): void {
    if (this.locationForm.valid) {
      this.locationService.updateLocation(this.location)
        .subscribe(result => {
          this.router.navigate(['stories/' + this.storyID]);
        });
    }
  }
}
