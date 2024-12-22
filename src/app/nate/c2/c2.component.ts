import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CanvasService } from '../canvas.service';

@Component({
  selector: 'app-nate-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2ComponentNate implements OnInit, OnChanges {
  @Input() settings: any;
  private ctx!: CanvasRenderingContext2D | null;
  private balls: any[] = [];
  private animationFrameId: number | null = null;

  constructor(private canvasService: CanvasService) {}

  ngOnInit() {
    this.canvasService.isCanvasInitialized().subscribe(initialized => {
      if (initialized) {
        this.initializeCanvas();
        this.createBalls();
        this.runAnimation();
      } else {
        console.error('Canvas not initialized');
      }
    });

    this.canvasService.isCanvasVisible().subscribe(visible => {
      const canvas = this.canvasService.getCanvas();
      canvas.style.display = visible ? 'block' : 'none';
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['settings'] && !changes['settings'].firstChange) {
      this.createBalls();
    }
  }

  initializeCanvas() {
    this.ctx = this.canvasService.getContext();
    if (this.ctx) {
      console.log('Canvas context initialized');
    } else {
      console.error('Canvas context not found');
    }
  }

  createBalls() {
    this.balls = [];
    for (let i = 0; i < this.settings.ballAmount; i++) {
      this.balls.push(this.addBall());
    }
    console.log('Balls created:', this.balls);

    // Restart the animation loop
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.runAnimation();
  }

  addBall() {
    const canvas = this.canvasService.getCanvas();
    return {
      x: this.randomNumber(canvas.width - this.settings.ballSize * 2, 0) + this.settings.ballSize,
      y: this.randomNumber(canvas.height - this.settings.ballSize * 2, 0) + this.settings.ballSize,
      size: this.randomNumber(this.settings.ballSize, 5),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      dirX: this.randomNumber(2, 1) === 1 ? 1 : -1,
      dirY: this.randomNumber(2, 1) === 1 ? 1 : -1,
      speed: this.randomNumber(this.settings.ballSpeed, 1)
    };
  }

  randomNumber(n: number, s: number): number {
    return Math.floor(Math.random() * n) + s;
  }

  runAnimation() {
    const canvas = this.canvasService.getCanvas();
    const ctx = this.ctx;
    const balls = this.balls;

    const drawBalls = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < balls.length; i++) {
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, balls[i].size, 0, 2 * Math.PI);
        ctx.fillStyle = balls[i].color;
        ctx.fill();
      }
    };

    const updateDirection = () => {
      for (let i = 0; i < balls.length; i++) {
        if ((balls[i].y + balls[i].dirY * balls[i].speed > canvas.height - balls[i].size) || (balls[i].y + balls[i].dirY * balls[i].speed < balls[i].size)) {
          balls[i].dirY = -balls[i].dirY;
        }
        if ((balls[i].x + balls[i].dirX * balls[i].speed > canvas.width - balls[i].size) || (balls[i].x + balls[i].dirX * balls[i].speed < balls[i].size)) {
          balls[i].dirX = -balls[i].dirX;
        }

        balls[i].y += balls[i].dirY * balls[i].speed;
        balls[i].x += balls[i].dirX * balls[i].speed;
      }
    };

    const run = () => {
      drawBalls();
      updateDirection();
      this.animationFrameId = requestAnimationFrame(run);
    };

    run();
  }
}