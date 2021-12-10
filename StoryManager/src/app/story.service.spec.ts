import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Story } from '../model/story';
import { ROLES, User } from '../model/user';
import { StoryService } from './story.service';
import { UserService } from './user.service';

// Mock user data
const mockUserData: User = {
  _id: '61b377d178a505c6373a15a7',
  username: "TESTUSER",
  password: "TESTUSER",
  stories: [],
  role: ROLES.USER
};

describe('StoryService', () => {
  let httpSpy: jasmine.SpyObj<HttpClient>;
  let injector: TestBed;
  let storyService: StoryService;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule ],
      providers: [HttpClient, HttpHandler, HttpClientTestingModule]
    });
    injector = getTestBed();
    storyService = injector.get(StoryService);
  });

  afterEach(() => {
    injector.resetTestingModule();
  });

  it('should be created', () => {
    expect(storyService).toBeTruthy();
  });

  it('should return observable stories', () => {
    let temp: Story[];

    inject([StoryService], async (storyService: StoryService) => {
      storyService.getStories()
        .subscribe(result => {
          temp = result;
        });
    });

    expect(temp).not.toBeNull();
  });

  it('should only add stories to valid users', () => {
    inject([StoryService], async (storyService: StoryService) => {
      var story = new Story();
      story.author = new User();
      story.author._id = "fakeid";
      story.title = "testle";
      story.description = "testcription";
      const result = await storyService.postStory(story);
      expect(result).not.toBeNull()
    })
  });

  it('should find a story',
    // ID of TESTSTORY
    // 61b386c9dba0ecb0fa56d8eb
    inject([StoryService], async (storyService: StoryService) => {
      storyService.getStoryByID('61b386c9dba0ecb0fa56d8eb')
        .subscribe(result => {
          expect(result.title.equals("TESTSTORY"));
        });
    })
  );

  xit('should edit a story', (done: DoneFn) => {
    const s: Story = {
      _id: "61b386c9dba0ecb0fa56d8eb",
      title : "TESTSTORY",
      description: "TESTSTORYEDIT",
      author: new User(),
      events: [],
      locations: [],
      img: null
    }

    inject([StoryService], async (storyService: StoryService) => {
      storyService.updateStory(s)
        .subscribe(result => {
          expect(result.title.equals("TESTSTORY"));
          expect(result.description.equals("TESTSTORYEDIT"));
        });
    })
  });

  xit('should add and remove a story', (done: DoneFn) => {

    const newStory: Story = {
      _id: "",
      title: "TESTSTORY",
      description: "TESTSTORYEDIT",
      author: new User(),
      events: [],
      locations: [],
      img: null
    }

    inject([StoryService], async (storyService: StoryService) => {
      storyService.postStory(newStory)
        .subscribe(result => {
          expect(result).not.toBeNull();
        });
    })

    inject([StoryService], async (storyService: StoryService) => {
      storyService.deleteStory(newStory)
        .subscribe(result => {
          expect(result).not.toBeNull();
        });
    })
  });
});
