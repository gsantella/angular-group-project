import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c6',
  imports: [FormsModule],
  templateUrl: './c6.component.html',
  styleUrl: './c6.component.css'
})
export class C6Component {
  userName: string = 'Rishi Desai';
  userEmail: string = 'rdesai37@southhills.edu';
  userAge: number = 20;

  saveProfile(): void {
    alert(`Profile saved! Name: ${this.userName}, Email: ${this.userEmail}, Age: ${this.userAge}`);
  }
}
