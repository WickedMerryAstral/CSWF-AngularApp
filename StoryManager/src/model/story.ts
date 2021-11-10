import { Event } from './event';
import { Location } from './location';
import { User } from './user';

export class Story {
  _id: String;
  author: User;
  title: String;
  description: String;
  events: Event[];
  locations: Location[];
}
