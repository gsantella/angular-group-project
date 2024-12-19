import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c5',
  imports: [FormsModule],
  templateUrl: './c5.component.html',
  styleUrl: './c5.component.css'
})
export class C5Component {
  fontSize: number = 16;

  updateFontSize(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.fontSize = parseInt(inputElement.value, 10);
  }
}
