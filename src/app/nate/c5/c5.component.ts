import { Component } from '@angular/core';

@Component({
  selector: 'app-nate-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5ComponentNate {
  images: string[] = [
    'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image1',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image2',
    'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image3'
  ];
  currentImageIndex: number = 0;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    console.log('Current Image Index:', this.currentImageIndex);
    console.log('Current Image URL:', this.images[this.currentImageIndex]);
  }
}