import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../../model/location'
import { LocationService } from '../location.service';
import { WebtokenService } from '../webtoken.service';

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
    private router: Router,
    private webtoken: WebtokenService) { }

  ngOnInit(): void {
    this.storyID = this.activeRoute.snapshot.paramMap.get('storyID');
    this.locationService.getLocationsByStory(this.storyID)
      .subscribe((result) => {
        this.locations = result
        this.setCharacterPreview();
      });

    console.log(this.webtoken.getUser());
    console.log(this.webtoken.getJwtToken());
  }

  addLocation(): void {
    this.router.navigate(['stories/' + this.storyID + '/locations/new']);
  }

  selectedLocation?: Location;
  onSelect(location: Location) {
    // Route to location details
    this.router.navigate(['stories/' + this.storyID + '/locations/' + location._id])
  }

  setCharacterPreview(): void {
    this.locations.forEach(loc => {
      loc.characterPreview = 'Characters: ' + loc.characters.length;
    });
  }
}
