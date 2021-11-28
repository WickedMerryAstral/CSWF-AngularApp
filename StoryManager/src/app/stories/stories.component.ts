import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '../../model/story';
import { StoryService } from '../story.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[];
  userID: String;

  constructor(private storyService: StoryService,
    private router: Router,
    private webToken: WebtokenService) { }

  ngOnInit(): void {
    this.webToken.getUser()
      .subscribe(result => {
        this.userID = result._id;
      });
    this.storyService.getStoriesByUser(this.userID)
      .subscribe(result => this.stories = result);
  }

  selectedStory?: Story;
  onSelect(story: Story): void {
    this.selectedStory = story;
    this.router.navigate(['stories', story._id]);
  }

  addStory(): void {
    this.router.navigate(['stories/new']);
  }
}
