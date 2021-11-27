import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorydetailsComponent } from './storydetails.component';

describe('StorydetailsComponent', () => {
  let component: StorydetailsComponent;
  let fixture: ComponentFixture<StorydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
