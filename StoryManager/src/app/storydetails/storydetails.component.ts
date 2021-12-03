import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Story } from '../../model/story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-storydetails',
  templateUrl: './storydetails.component.html',
  styleUrls: ['./storydetails.component.css']
})
export class StorydetailsComponent implements OnInit {

  story: Story;
  id: String;

  constructor(
    private storyService: StoryService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('storyID');

    this.storyService.getStoryByID(this.id)
      .subscribe(result => {
        this.story = result;
      });
  }

  removeStory() {
      if (confirm("Are you sure you want to delete " + this.story.title + "?")) {
        this.storyService.deleteStory(this.story)
          .subscribe(result => {
            this.router.navigate(['stories']);
          });
      }
  }

  updateStory() {
    this.storyService.updateStory(this.story)
      .subscribe(result => {
        this.router.navigate(['stories']);
      });
  }
}
