import { Component } from '@angular/core';

@Component({
  selector: 'app-trumpfrog',
  imports: [],
  templateUrl: './trumpfrog.component.html',
  styleUrl: './trumpfrog.component.css'
})
export class TrumpfrogComponent {
  image1:string = 'https://www.brookings.edu/wp-content/uploads/2020/11/2020-11-04T082617Z_1408284537_RC28WJ99RD0N_RTRMADP_3_USA-ELECTION-TRUMP.jpg'
  image2:string = 'https://www.lvzoo.org/wp-content/themes/lvzoo/timthumb.php?src=https://www.lvzoo.org/wp-content/uploads/2015/11/Whites-Tree-Frog-image1.jpg&w=776&h=771'
  text1:string = 'Trump Mode'
  text2:string = 'Frog Mode'
  imageSrc:string = this.image1 // default
  buttonText:string = this.text1 // default
  changeImage(){
    this.imageSrc == this.image1 ? (()=>{
      this.imageSrc = this.image2;
      this.buttonText = this.text2
      })() : (()=>{
      this.imageSrc = this.image1
      this.buttonText = this.text1
      })()
  }
  hoverChangeText(){
    this.buttonText == this.text2 ? this.buttonText = this.text1 : this.buttonText = this.text2
    
  }
  hoverExitSwitch(){
    this.imageSrc == this.image1 ? this.buttonText = this.text1 : this.buttonText = this.text2
  }
}

