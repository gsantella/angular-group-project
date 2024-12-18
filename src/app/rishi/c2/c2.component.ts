import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c2',
  imports: [],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {
  @Input() name: string = 'Rishi Desai';
  @Input() age: number = 20;
  @Input() img = 'rishi.jpg';
}