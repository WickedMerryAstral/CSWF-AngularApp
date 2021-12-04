import { Character } from './character'

export class Event {
  _id: String;
  title: String;
  description: String;
  date: Date;
  characters: Character[];
  characterPreview: String;
}
