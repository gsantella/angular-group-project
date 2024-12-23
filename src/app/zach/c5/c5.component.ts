import { Component } from '@angular/core';

@Component({
  selector: 'app-c5',
  template: `
    <div>
      <h3>C5-Databind-[]</h3>
      <input [value]="inputValue" type="text">
      <p>Input value is: {{ inputValue }}</p>
    </div>
  `,
  standalone: true,
  styleUrls: ['./c5.component.css']
})
export class C5Component {
  inputValue: string = 'Hello World';
}
