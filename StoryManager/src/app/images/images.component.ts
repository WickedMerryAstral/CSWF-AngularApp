import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';
import { WebtokenService } from '../webtoken.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService: ImageService,
    private router: Router,
    private webToken: WebtokenService) { }

  ngOnInit(): void {
    // Get all images to display.
  }
}
