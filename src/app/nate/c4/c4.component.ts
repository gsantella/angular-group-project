import { Component } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nate-c4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css'],
  providers: [DecimalPipe]
})
export class C4ComponentNate {
  weight: number = 0; // Weight in pounds
  heightFeet: number = 0; // Height in feet
  heightInches: number = 0; // Height in inches
  bmi: number = 0;

  constructor(private decimalPipe: DecimalPipe) {}

  calculateBMI() {
    const heightInInches = (this.heightFeet * 12) + this.heightInches;
    if (heightInInches > 0) {
      this.bmi = (this.weight / (heightInInches * heightInInches)) * 703;
    } else {
      this.bmi = 0;
    }
  }

  get formattedBMI() {
    return this.decimalPipe.transform(this.bmi, '1.2-2');
  }
}