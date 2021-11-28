import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Story } from '../../model/story';
import { User } from '../../model/user';
import { StoryService } from '../story.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-createstory',
  templateUrl: './createstory.component.html',
  styleUrls: ['./createstory.component.css']
})
export class CreatestoryComponent implements OnInit {

  user: User;

  constructor(
    private storyService: StoryService,
    private router: Router,
    private webtoken: WebtokenService) {
  }
  story: Story;
  storyForm = new FormGroup({
    title: new FormControl('',
      Validators.required),
    description: new FormControl('',
      Validators.required),
  });

  // Getters for Form.
  get title() {
    return this.storyForm.get('title');
  }
  get description() {
    return this.storyForm.get('description');
  }

  ngOnInit(): void {
    this.webtoken.getUser()
      .subscribe(result => this.user = result);
  }

  onSubmit(): void {
    this.story = this.storyForm.value;
    this.story.author = this.user;
    this.storyService.postStory(this.story)
      .subscribe(result => {
        console.log(result);
        this.router.navigate(['stories']);
      },
        err => {
          console.log(err);
      });
  }
}
