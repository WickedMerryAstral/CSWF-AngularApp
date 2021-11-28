import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../../model/location';
import { LocationService } from '../location.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrls: ['./createlocation.component.css']
})
export class CreatelocationComponent implements OnInit {

  constructor(
    private locationService: LocationService,
    private router: Router,
    private webtoken: WebtokenService,
    private activeRoute: ActivatedRoute) {
  }

  storyID: String;

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

  ngOnInit(): void {
    this.storyID = this.activeRoute.snapshot.paramMap.get('id');
  }

  onSubmit(): void {
    this.location = this.locationForm.value;
    this.locationService.postLocation(this.location, this.storyID)
      .subscribe(result => {
        this.router.navigate(['stories']);
      });
  }
}
