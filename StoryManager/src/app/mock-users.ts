import { Story } from '../model/story';
import { User, ROLES } from '../model/user';

export const UserSet: User[] = [
  { _id: "1", username: "Jack", password: "Jack", stories: [], role: ROLES.USER },
  { _id: "2", username: "Jill", password: "Jill", stories: [], role: ROLES.ADMIN },
  { _id: "3", username: "Joseph", password: "Joseph", stories: [], role: ROLES.USER },
  { _id: "4", username: "Jaque", password: "Jaque", stories: [], role: ROLES.USER },
  { _id: "5", username: "Joline", password: "Joline", stories: [], role: ROLES.USER },
];
