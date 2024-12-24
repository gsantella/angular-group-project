import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-c4',
  imports: [DecimalPipe],
  templateUrl: './c4.component.html',
  styleUrl: './c4.component.css',
})
export class C4Component {

  kilobytes: string = '';
  megabytes: number = 0;

  conversion() {
    this.megabytes = parseInt(this.kilobytes) / 1024
  }
}
