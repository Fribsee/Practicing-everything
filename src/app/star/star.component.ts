import { Component} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent {
  isFavorite = false;

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }



}
