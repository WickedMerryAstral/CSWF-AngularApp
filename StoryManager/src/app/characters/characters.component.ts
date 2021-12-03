import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../model/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  // Either from an Event or a Location
  @Input() source: String;

  constructor() { }

  ngOnInit(): void {
  }

}
