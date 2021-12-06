import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../model/character';
import { CharacterService } from '../character.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  // Set to either EVENT or LOCATION
  @Input() source: String;
  eventID: String;
  locationID: String;
  storyID: String;

  constructor(private router: Router,
    private charaService: CharacterService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.storyID = this.activeRoute.snapshot.paramMap.get('storyID');

    if (this.source == "EVENT") {
      this.eventID = this.activeRoute.snapshot.paramMap.get('eventID');

      this.charaService.getCharactersByEvent(this.eventID)
        .subscribe(result => {
          this.characters = result;
        });

    } else if (this.source == "LOCATION") {
      this.locationID = this.activeRoute.snapshot.paramMap.get('locationID');

      this.charaService.getCharactersByLocation(this.locationID)
        .subscribe(result => {
          this.characters = result;
        });
    }
  }

  addCharacter(): void {
    if (this.source == "EVENT") {
      this.router.navigate(['stories/' + this.storyID + '/events/' + this.eventID + "/characters/new"]);
    } else if (this.source == "LOCATION") {
      this.router.navigate(['stories/' + this.storyID + '/locations/' + this.locationID + "/characters/new"]);
    }
  }

  onSelect(character: Character) {
    if (this.source == "EVENT") {
      this.router.navigate(['stories/' + this.storyID + '/events/' + this.eventID + "/characters/" + character._id]);
    } else if (this.source == "LOCATION") {
      this.router.navigate(['stories/' + this.storyID + '/locations/' + this.locationID + "/characters/" + character._id]);
    }
  }
}
