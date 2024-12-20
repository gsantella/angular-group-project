import { Component } from '@angular/core';
import { C6Component } from '../c6/c6.component';
import { C5Component } from "../c5/c5.component";

@Component({
  selector: 'app-guido-c1',
  imports: [C6Component, C5Component],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1ComponentGuido {

}
