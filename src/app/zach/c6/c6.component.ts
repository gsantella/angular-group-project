import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c6',
  template: `
    <div>
      <h3>C6-Databind-[()]</h3>
      <input [(ngModel)]="name" type="text" placeholder="Enter your name">
      <p>Your name is: {{ name }}</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./c6.component.css']
})
export class C6Component {
  name: string = '';
}
