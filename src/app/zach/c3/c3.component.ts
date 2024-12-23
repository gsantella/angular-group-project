import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-c3',
  template: `
  <div>
    <h3>C3-EventListener&If</h3>
    <button (click)="toggleClick()">Click Me</button>
    <p *ngIf="isClicked">Button clicked! State is: {{ isClicked }}</p>
  </div>
  `,
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./c3.component.css']
})
export class C3Component {
  isClicked = false;

  toggleClick() {
    this.isClicked = !this.isClicked;
  }
}
