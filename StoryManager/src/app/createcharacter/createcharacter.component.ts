import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../model/character';
import { CharacterService } from '../character.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-createcharacter',
  templateUrl: './createcharacter.component.html',
  styleUrls: ['./createcharacter.component.css']
})
export class CreatecharacterComponent implements OnInit {

  constructor(
    private charaService: CharacterService,
    private router: Router,
    private webtoken: WebtokenService,
    private activeRoute: ActivatedRoute) {
  }

  PRONOUNS = [
    { name: 'He/Him', value: 'he/him' },
    { name: 'She/Her', value: 'she/her' },
    { name: 'They/Them', value: 'they/them' },
    { name: 'Other', value: 'Other' },
  ];

  storyID: String;
  locationID: String;
  eventID: String;

  character: Character;
  characterForm = new FormGroup({
    name: new FormControl('',
      Validators.required),
    pronouns: new FormControl('',
      Validators.required),
    description: new FormControl(''),
    birthdate: new FormControl('',
      Validators.required),
  });

  // Getters for Form.
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

  ngOnInit(): void {
    // Check which one isn't undefined.
    this.storyID = this.activeRoute.snapshot.paramMap.get('storyID');
    this.eventID = this.activeRoute.snapshot.paramMap.get('eventID');
    this.locationID = this.activeRoute.snapshot.paramMap.get('locationID');
  }

  onSubmit(): void {
    if (this.characterForm.valid) {
      this.character = this.characterForm.value;
      this.character.pronouns = this.characterForm.get('pronouns').value.value;

      if (this.eventID !== null) {
        this.charaService.postCharacterToEvent(this.character, this.eventID, this.storyID)
          .subscribe(result => {
            this.router.navigate(['stories/' + this.storyID + /events/ + this.eventID]);
          });
      }
      if (this.locationID !== null) {
        this.charaService.postCharacterToLocation(this.character, this.locationID, this.storyID)
          .subscribe(result => {
            this.router.navigate(['stories/' + this.storyID + /locations/ + this.locationID]);
          });
      }
    }
  }
}
