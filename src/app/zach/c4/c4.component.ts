import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c4',
  template: `
    <div>
      <h3>C4-Calculator</h3>
      <input [(ngModel)]="num1" type="number" placeholder="Enter first number">
      <input [(ngModel)]="num2" type="number" placeholder="Enter second number">
      <p>Sum: {{ (num1 + num2) | number:'1.0-2' }}</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, DecimalPipe],
  styleUrls: ['./c4.component.css']
})
export class C4Component {
  num1: number = 0;
  num2: number = 0;
}
