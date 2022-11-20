import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular ' + VERSION.major; 
}
