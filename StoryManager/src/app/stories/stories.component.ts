import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '../../model/story';
import { User } from '../../model/user';
import { StoryService } from '../story.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories: Story[];
  user: User;
  gridColumns: Number;

  constructor(private storyService: StoryService,
    private router: Router,
    private webToken: WebtokenService) { }

  ngOnInit(): void {
    if (!this.webToken.hasUser()) {
      this.router.navigate(['/users/login']);
    } else {
      // Default grid column set.
      this.gridColumns = 3;

      this.webToken.getUser()
        .subscribe(result => {
          this.user = result;
          console.log(this.user);
          console.log(this.webToken.getJwtToken());
        });

      this.storyService.getStories()
        .subscribe((result) => {
          this.stories = result
          this.stories.forEach(story => {
            story.img = '/assets/placeholder.png';
          });
        });
    }
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
