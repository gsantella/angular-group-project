import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-c2',
  standalone: true,
  template: `
  <div>
      <h3>C2-Input</h3>
      <p *ngIf="parentString">{{ parentString }}</p>
</div>
  `,
  styleUrls: ['./c2.component.css']
})
export class C2Component {
  @Input() parentString: string = '';
}
