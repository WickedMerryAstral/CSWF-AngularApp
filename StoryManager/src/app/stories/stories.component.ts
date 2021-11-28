import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '../../model/story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[];

  constructor(private storyService: StoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.storyService.getStories()
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
