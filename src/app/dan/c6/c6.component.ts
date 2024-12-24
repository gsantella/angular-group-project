import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c6',
  imports: [FormsModule],
  templateUrl: './c6.component.html',
  styleUrl: './c6.component.css'
})
export class C6Component {
  adjective1: string = 'adjective';
  adjective2: string = 'adjective';
  noun1: string = 'noun';
  noun2: string = 'noun';
  color: string = 'color';
  verb1: string = 'verb';
  verb2: string = 'verb2';

}
