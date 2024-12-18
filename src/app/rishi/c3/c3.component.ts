import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  imports: [],
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.css'
})
export class C3Component {
  backgroundColor: string = 'lightblue';
  showMessage: boolean = false;

  click() {
    this.backgroundColor = this.backgroundColor === 'lightblue' ? 'lightcoral': 'lightblue';
    this.showMessage = !this.showMessage;
  }
}
