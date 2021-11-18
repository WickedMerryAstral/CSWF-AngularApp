import { Story } from './story';

export class User {
  _id: String;
  username: String;
  password: String;
  stories: Story[];
  role: ROLES;
}

export enum ROLES {
  USER = 1,
  ADMIN = 2
}
