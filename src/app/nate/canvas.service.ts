import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  private canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;
  private canvasInitialized = new BehaviorSubject<boolean>(false);
  private canvasVisible = new BehaviorSubject<boolean>(true);

  setCanvas(canvas: ElementRef<HTMLCanvasElement>) {
    this.canvas = canvas;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    if (this.ctx) {
      console.log('Canvas context set successfully');
      this.canvasInitialized.next(true);
    } else {
      console.error('Failed to set canvas context');
    }
  }

  getContext(): CanvasRenderingContext2D | null {
    return this.ctx;
  }

  getCanvas(): HTMLCanvasElement {
    if (this.canvas) {
      return this.canvas.nativeElement;
    } else {
      throw new Error('Canvas element not set');
    }
  }

  isCanvasInitialized(): Observable<boolean> {
    return this.canvasInitialized.asObservable();
  }

  toggleCanvasVisibility() {
    this.canvasVisible.next(!this.canvasVisible.value);
  }

  isCanvasVisible(): Observable<boolean> {
    return this.canvasVisible.asObservable();
  }
}