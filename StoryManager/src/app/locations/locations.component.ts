import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../../model/location'
import { LocationService } from '../location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  storyID: String;
  locations: Location[];

  constructor
    (private locationService: LocationService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.storyID = this.activeRoute.snapshot.paramMap.get('id');
    this.locationService.getLocations(this.storyID)
      .subscribe(result => this.locations = result);
  }

  addLocation(): void {
    this.router.navigate(['stories/' + this.storyID + '/locations/new']);
  }

  selectedLocation?: Location;
  onSelect(location: Location) {
    this.selectedLocation = location;
  }
}
