import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor() { }

  @Input() links: string[] = []; 
  
  urlData:string[] = [];

  ngOnInit(): void {
    this.urlData = this.links;
  }


  removeImg(url:string) {
    this.urlData = this.links.filter(e=>(url==e));
  }

}
