import { Component } from '@angular/core';
import { C2Component } from '../c2/c2.component';
import { C3Component } from '../c3/c3.component';
import { C4Component } from '../c4/c4.component';
import { C5Component } from '../c5/c5.component';
import { C6Component } from "../c6/c6.component";



@Component({
  selector: 'app-dan-c1',
  imports: [C2Component, C3Component, C4Component, C5Component, C6Component],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1ComponentDan {

}
