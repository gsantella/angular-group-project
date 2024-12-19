import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1ComponentShawn } from "./shawn/c1/c1.component";
import { C1ComponentZach } from "./zach/c1/c1.component";
import { C1ComponentDan } from "./dan/c1/c1.component";
import { C1ComponentNate } from "./nate/c1/c1.component";
import { C1ComponentRishi } from "./rishi/c1/c1.component";
import { C1ComponentGuido } from './guido/c1/c1.component';


@Component({
  selector: 'app-root',
  imports: [C1ComponentShawn, C1ComponentZach, C1ComponentDan, C1ComponentNate, C1ComponentRishi, C1ComponentGuido],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-group-project';
}
