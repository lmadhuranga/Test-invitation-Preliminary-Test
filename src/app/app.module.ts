import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyGalaryComponent } from './my-galary/my-galary.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { AppMainComponent } from './app-main/app-main.component';
import { ImgTagComponent } from './img-tag/img-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGalaryComponent,
    ImageGalleryComponent, 
    AppMainComponent, ImageGalleryComponent, ImgTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
