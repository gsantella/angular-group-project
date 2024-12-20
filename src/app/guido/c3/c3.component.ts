import { Component, NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { data } from './data';

@Component({
  selector: 'app-guido-c3',
  imports: [NgxChartsModule],
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.css'
})
export class C3Component {

  data:any[] = [];
  view:any = [500, 400];
  legend: boolean = true;
  legendPosition:any = 'below';
  
  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { data });
  }

}
