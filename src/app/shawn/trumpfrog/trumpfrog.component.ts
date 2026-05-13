import {
  Component,
  computed,
  WritableSignal,
  signal,
  Signal,
  linkedSignal,
} from '@angular/core';

enum TrumpFrogState {
  trump = 'Trump Mode',
  frog = 'Frog Mode',
}

@Component({
  selector: 'app-trumpfrog',
  imports: [],
  template: `
  <h1>Trump-Frog</h1>
  <img [src]="imageSrc()">
  <div style="display:flex;flex-direction: row;">
      <button 
        style="margin-top: 15px;" 
        (mouseover)='hoverChangeText()' 
        (click)="changeImage()" 
        (mouseleave)="hoverExitSwitch()">{{textSrc()}}
      </button>
      <h2 style="margin-left: 20px;">Look at this flawless button tech!</h2>
  </div>
  <p>Component data bound to HTML property</p>
  `,
  styleUrl: './trumpfrog.component.css',
})
export class TrumpfrogComponent {
  private readonly state: WritableSignal<boolean> = signal<boolean>(false);
  private readonly buttonState: WritableSignal<boolean> = linkedSignal<boolean>(
    () => !this.state()
  );
  protected readonly imageSrc: Signal<string> = computed<string>(() =>
    this.state()
      ? 'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_2x3.jpg'
      : 'https://www.brookings.edu/wp-content/uploads/2020/11/2020-11-04T082617Z_1408284537_RC28WJ99RD0N_RTRMADP_3_USA-ELECTION-TRUMP.jpg'
  );
  protected readonly textSrc: Signal<TrumpFrogState> = computed<TrumpFrogState>(
    () => (this.buttonState() ? TrumpFrogState.trump : TrumpFrogState.frog)
  );

  protected changeImage(): void {
    this.state.update((v: boolean) => !v);
  }

  protected hoverChangeText(): void {
    this.buttonState.update((v: boolean) => (this.state() == v ? v : !v));
  }

  protected hoverExitSwitch(): void {
    this.buttonState.update((v: boolean) => (this.state() == v ? !v : v));
  }
}
