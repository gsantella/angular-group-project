import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CanvasService } from '../canvas.service';
import { C2ComponentNate } from '../c2/c2.component';
import { C3ComponentNate } from '../c3/c3.component';
import { C4ComponentNate } from '../c4/c4.component';
import { C5ComponentNate } from '../c5/c5.component';
import { C6ComponentNate } from '../c6/c6.component';

@Component({
  selector: 'app-nate-c1',
  standalone: true,
  imports: [C2ComponentNate, C3ComponentNate, C4ComponentNate, C5ComponentNate, C6ComponentNate],
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1ComponentNate implements AfterViewInit {
  @ViewChild('mainCanvas', { static: true }) mainCanvas!: ElementRef<HTMLCanvasElement>;
  ballCount: number = 10;
  settings = {
    ballSize: 10,
    ballAmount: 20,
    ballSpeed: 2
  };

  constructor(private canvasService: CanvasService) {}

  ngAfterViewInit() {
    // Ensure the canvas is properly initialized
    this.canvasService.setCanvas(this.mainCanvas);
    console.log('Main canvas initialized:', this.mainCanvas);
  }

  updateSettings(newSettings: any) {
    this.settings = { ...this.settings, ...newSettings };
  }
}