import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../model/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {

  pipe = new DatePipe('en-US');

  PRONOUNS = [
    { name: 'He/Him', value: 'he/him' },
    { name: 'She/Her', value: 'she/her' },
    { name: 'They/Them', value: 'they/them' },
    { name: 'Other', value: 'other' },
  ];

  storyID: String;
  locationID: String;
  eventID: String;
  characterID: String;

  // Form
  character: Character;
  characterForm = new FormGroup({
    name: new FormControl('',
      Validators.required),
    pronouns: new FormControl('',
      Validators.required),
    description: new FormControl('',
      Validators.required),
    birthdate: new FormControl('',
      Validators.required),
  });

  // Getters for form control
  get name() {
    return this.characterForm.get('name');
  }
  get pronouns() {
    return this.characterForm.get('pronouns');
  }
  get description() {
    return this.characterForm.get('description');
  }
  get birthdate() {
    return this.characterForm.get('birthdate');
  }

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private charaService: CharacterService) { }

  ngOnInit(): void {
    this.storyID = this.activeRoute.snapshot.paramMap.get('storyID');
    this.locationID = this.activeRoute.snapshot.paramMap.get('locationID');
    this.eventID = this.activeRoute.snapshot.paramMap.get('eventID');
    this.characterID = this.activeRoute.snapshot.paramMap.get('characterID');


    this.charaService.getCharacter(this.characterID, this.storyID)
      .subscribe(result => {
        this.character = result;

        const temp = this.character.birthdate;
        const displayDate = this.pipe.transform(temp, 'yyyy-MM-dd');

        this.PRONOUNS.forEach(p => {
          if (this.character.pronouns == p.value) {
            this.characterForm.patchValue({ pronouns: p, birthdate: displayDate });
          }
        });
      });
  }

  updateCharacter() {
    if (this.characterForm.valid) {
      this.character = this.characterForm.value;
      this.character._id = this.characterID;
      this.character.pronouns = this.characterForm.get('pronouns').value.value;

      console.log(this.character);

      this.charaService.updateCharacter(this.character, this.storyID)
        .subscribe(result => {
          if (this.eventID != null) {
            this.router.navigate(['stories/' + this.storyID + '/events/' + this.eventID])
          }
          if (this.locationID != null) {
            this.router.navigate(['stories/' + this.storyID + '/locations/' + this.locationID])
          }
        });
    }
  }

  removeCharacter() {
    if (confirm("Are you sure you want to delete " + this.character.name + "?")) {
      this.charaService.removeCharacter(this.characterID, this.storyID)
        .subscribe(result => {
          if (this.eventID != null) {
            this.router.navigate(['stories/' + this.storyID + '/events/' + this.eventID])
          }
          if (this.locationID != null) {
            this.router.navigate(['stories/' + this.storyID + '/locations/' + this.locationID])
          }
        });
    }
  }
}
