import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateuserComponent } from './createuser/createuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// Material
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list'
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { StoriesComponent } from './stories/stories.component';
import { StorydetailsComponent } from './storydetails/storydetails.component';
import { LoginComponent } from './login/login.component';
import { CreatestoryComponent } from './createstory/createstory.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationdetailsComponent } from './locationdetails/locationdetails.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { DebugComponent } from './debug/debug.component'
import { WebtokenService } from './webtoken.service';
import { EventsComponent } from './events/events.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { ImagesComponent } from './images/images.component';
import { CreateeventComponent } from './createevent/createevent.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailsComponent,
    CreateuserComponent,
    NavigationComponent,
    StoriesComponent,
    StorydetailsComponent,
    LoginComponent,
    CreatestoryComponent,
    LocationsComponent,
    LocationdetailsComponent,
    CreatelocationComponent,
    DebugComponent,
    EventsComponent,
    EventdetailsComponent,
    CharactersComponent,
    CharacterdetailsComponent,
    ImagesComponent,
    CreateeventComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    NoopAnimationsModule,
    RouterModule,
    MatGridListModule
  ],
  providers: [
    WebtokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
