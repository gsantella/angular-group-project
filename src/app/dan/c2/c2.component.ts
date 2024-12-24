import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-c2',
  imports: [],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {

  @Input() carmake: string = 'Subaru';
  @Input() carmodel: string = 'Impreza';
  @Input() licenseplatenum: number = 1234567;
  @Input() carmiles: number = 27565 ;
  @Input() year: number = 2008 ;

}
