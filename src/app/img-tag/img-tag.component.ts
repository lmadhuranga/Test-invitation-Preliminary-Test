import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img-tag',
  templateUrl: './img-tag.component.html',
  styleUrls: ['./img-tag.component.css']
})
export class ImgTagComponent implements OnInit {

  constructor() { }
  @Input() link: string  = ''; 
  @Output('removeImg') removeImg: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    console.log('first link ',  this.link  )
  }


  onClickBtn( ) {
    this.removeImg.emit(this.link);
  }

  

}
