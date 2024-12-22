import { Component } from '@angular/core';
import { CanvasService } from '../canvas.service';

@Component({
  selector: 'app-nate-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3ComponentNate {
  constructor(private canvasService: CanvasService) {}

  toggleCanvas() {
    this.canvasService.toggleCanvasVisibility();
  }
}