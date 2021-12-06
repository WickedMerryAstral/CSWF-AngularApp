import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { CreatecharacterComponent } from './createcharacter/createcharacter.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { CreatestoryComponent } from './createstory/createstory.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { HomeComponent } from './home/home.component';
import { LocationdetailsComponent } from './locationdetails/locationdetails.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { StorydetailsComponent } from './storydetails/storydetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsersComponent },
  { path: "users/register", component: CreateuserComponent },
  { path: "users/login", component: LoginComponent },
  { path: "stories", component: StoriesComponent },
  { path: "stories/new", component: CreatestoryComponent },
  { path: "stories/:storyID", component: StorydetailsComponent },
  { path: "stories/:storyID/locations/new", component: CreatelocationComponent },
  { path: "stories/:storyID/locations/:locationID", component: LocationdetailsComponent },
  { path: "stories/:storyID/events/new", component: CreateeventComponent },
  { path: "stories/:storyID/events/:eventID", component: EventdetailsComponent },
  { path: "stories/:storyID/events/:eventID/characters/new", component: CreatecharacterComponent },
  { path: "stories/:storyID/locations/:locationID/characters/new", component: CreatecharacterComponent },
  { path: "stories/:storyID/events/:eventID/characters/:characterID", component: CharacterdetailsComponent },
  { path: "stories/:storyID/locations/:locationID/characters/:characterID", component: CharacterdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
