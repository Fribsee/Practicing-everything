import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {
likeCount: number = 0;
clicked: boolean = false;

constructor() { }

  ngOnInit() {
  }
onClick() {
  this.clicked = !this.clicked;
  this.clicked ? this.likeCount++ : this.likeCount--;
}



}

