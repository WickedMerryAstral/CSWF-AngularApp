import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Story } from '../model/story';
import { User } from '../model/user';
import { StoryService } from './story.service';
import { UserService } from './user.service';

describe('StoryService', () => {
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

  it('should only add stories to valid users',
    inject([StoryService], async (storyService: StoryService) => {
      var story = new Story();
      story.author = new User();
      story.author._id = "fakeid";
      story.title = "testle";
      story.description = "testcription";

      const result = await storyService.postStory(story);
      expect(result).not.toBeNull()
    }));
});
