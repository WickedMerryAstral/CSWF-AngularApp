import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { CreatestoryComponent } from './createstory/createstory.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { StorydetailsComponent } from './storydetails/storydetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "users/new", component: CreateuserComponent },
  { path: "users/login", component: LoginComponent },
  { path: "stories", component: StoriesComponent },
  { path: "stories/new", component: CreatestoryComponent },
  { path: "stories/:id", component: StorydetailsComponent },
  { path: "stories/:id/locations/new", component: CreatelocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
