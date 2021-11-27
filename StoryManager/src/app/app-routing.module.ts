import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "users/new", component: CreateuserComponent },
  { path: "users/login", component: LoginComponent },
  { path: "stories", component: StoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
