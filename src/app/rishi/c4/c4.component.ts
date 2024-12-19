import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c4',
  imports: [FormsModule],
  templateUrl: './c4.component.html',
  styleUrl: './c4.component.css'
})
export class C4Component {
  amountUSD: number = 0;
  convertedAmount: number = 0;
  selectedCurrency: string = 'INR';

  exchangeRates: { [key: string]: number } = {
    EUR: 0.91,
    GBP: 0.78,
    JPY: 131.24,
    INR: 83.01
  };

  convertCurrency() {
    const rate = this.exchangeRates[this.selectedCurrency];
    this.convertedAmount = this.amountUSD * rate;
  }
}
