import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ROLES, User } from '../../model/user';
import { StoryService } from '../story.service';
import { UserService } from '../user.service';
import { WebtokenService } from '../webtoken.service';
import { StorydetailsComponent } from './storydetails.component';

// Mock user data
const mockUserData: User = {
  _id: '61b377d178a505c6373a15a7',
  username: "TESTUSER",
  password: "TESTUSER",
  stories: [],
  role: ROLES.USER
};

describe('StorydetailsComponent', () => {
  let component: StorydetailsComponent;
  let fixture: ComponentFixture<StorydetailsComponent>;

  // Mock services
  let userServiceSpy;
  let storyServiceSpy;
  let webtokenServiceSpy;
  let routerSpy;

  beforeEach(async () => {

    // Initializing jasmine spy objects
    userServiceSpy = jasmine.createSpyObj('UserService', [
      'login',
      'register'
    ]);

    webtokenServiceSpy = jasmine.createSpyObj('WebtokenService', [
      'getJwtToken',
      'getUser',
      'setJwtToken',
      'setUser',
      'hasUser',
      'clearUser'
    ]);

    storyServiceSpy = jasmine.createSpyObj('StoryService', [
      'postStory',
      'updateStory',
      'deleteStory',
      'getStories'
    ]);

    routerSpy = jasmine.createSpyObj('Router');

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: UserService, useValue: userServiceSpy, HttpClient },
        { provide: StoryService, useValue: storyServiceSpy, HttpClient },
        { provide: WebtokenService, useValue: webtokenServiceSpy, HttpClient },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute,
          useValue: {
            paramMap: of(
              convertToParamMap({
                // ID of the story created in DB for testing!
                storyID: '61b386c9dba0ecb0fa56d8eb',
              })
            ),
          },
        },
      ],
      declarations: [StorydetailsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
