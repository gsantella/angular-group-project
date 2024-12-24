import { Component } from '@angular/core';

@Component({
  selector: 'app-c5',
  imports: [],
  templateUrl: './c5.component.html',
  styleUrl: './c5.component.css'
})
export class C5Component {

  loading: number = 0

  increaseLoading() {
    if (this.loading < 100) {
      this.loading += 5;
    }
  }

  decreaseLoading() {
    if (this.loading > 0) {
      this.loading -= 5;
    }
  }

}
