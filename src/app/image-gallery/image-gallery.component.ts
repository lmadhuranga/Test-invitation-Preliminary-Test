import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor() { }

  @Input() links: string[] = [];
  
  ngOnInit(): void {
  }


  removeImg(id:any) {
    this.links[id]
  }

}
