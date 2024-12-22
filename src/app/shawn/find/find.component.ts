import { Component } from '@angular/core';
import * as text from './text'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-find',
  imports: [FormsModule,CommonModule],
  templateUrl: './find.component.html',
  styleUrl: './find.component.css'
})
export class FindComponent {
  searchQuery = ''
  longText = text.default
  longTextArray = this.longText.split(' ')
  results: string[] = []
  counter:any
  search(){
    this.counter = 0
    this.results = this.longTextArray.filter(line => {if (line.toLowerCase().includes(this.searchQuery.toLowerCase())){
                                                        this.counter+=1; 
                                                        return true
                                                      }
                                                      else{
                                                        return false}
                                                      })
  }
  get displayResults() {
    return this.searchQuery ? this.results.join('\n') : this.longText
  }
}

