import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {

  imageLink = "assets/img/background.png";

  constructor() { }

  ngOnInit(): void {
  }

}

