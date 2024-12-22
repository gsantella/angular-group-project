import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-draw-shape',
  imports: [],
  templateUrl: './draw-shape.component.html',
  styleUrl: './draw-shape.component.css'
})
export class DrawShapeComponent {
  @Input() shape: 'square' | 'circle' | 'triangle' = 'square' // Shape type
  @Input() size: number = 50 // Size of the shape
  @Input() color: string = 'blue'
  svgWidth: number = 200 // SVG canvas width
  svgHeight: number = 200 // SVG canvas height
  getTrianglePoints(): string {
    //chatgpt magic
    const halfSize = this.size / 2;
    const height = Math.sqrt(3) * halfSize; // Height of an equilateral triangle
    // Coordinates for an equilateral triangle centered in the SVG
    const top = `${this.svgWidth / 2},${(this.svgHeight - height) / 2}`; // Top vertex
    const left = `${(this.svgWidth / 2) - halfSize},${(this.svgHeight + height) / 2}`; // Left vertex
    const right = `${(this.svgWidth / 2) + halfSize},${(this.svgHeight + height) / 2}`; // Right vertex
  
    return `${top} ${left} ${right}`; // Join the points
  }
}
