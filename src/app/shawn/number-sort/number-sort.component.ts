import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-sort',
  imports: [FormsModule],
  templateUrl: './number-sort.component.html',
  styleUrl: './number-sort.component.css'
})
export class NumberSortComponent {
  sortedNumbers:number[] = []
  sort(value:string){
    const number = parseFloat(value)
    if(number){
      let lp = 0
      let hp = this.sortedNumbers.length
      while (lp < hp){
        const mp:number = Math.floor((lp + hp) / 2)
        if(this.sortedNumbers[mp] < number){
          lp = mp + 1
        }
        else{
          hp = mp
        }
      }
      if(this.sortedNumbers[lp] != number){
        this.sortedNumbers.splice(lp, 0, number)
      }
    }
  }
}
