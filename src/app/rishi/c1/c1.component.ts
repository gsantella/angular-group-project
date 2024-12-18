import { Component } from '@angular/core';
import { C2Component } from '../c2/c2.component';
import { C3Component } from '../c3/c3.component';

@Component({
  selector: 'app-rishi-c1',
  imports: [C2Component, C3Component],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1ComponentRishi {

}
