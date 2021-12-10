import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecharacterComponent } from './createcharacter.component';

describe('CreatecharacterComponent', () => {
  let component: CreatecharacterComponent;
  let fixture: ComponentFixture<CreatecharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
