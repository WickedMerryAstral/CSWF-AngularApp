import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateeventComponent } from './createevent/createevent.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { CreatestoryComponent } from './createstory/createstory.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { LocationdetailsComponent } from './locationdetails/locationdetails.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { StorydetailsComponent } from './storydetails/storydetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
