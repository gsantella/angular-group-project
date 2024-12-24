import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  imports: [],
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.css'
})
export class C3Component {

  power = false
  powerflow: string = '';

  onClick() {
    this.power = true
    this.powerflow = "Flowing"
  }

  offClick() {
    this.power = false
    this.powerflow = "Blocked"
  }

}
