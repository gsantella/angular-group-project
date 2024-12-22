import { Component } from '@angular/core';
import { TrumpfrogComponent } from '../trumpfrog/trumpfrog.component';
import { NumberSortComponent } from '../number-sort/number-sort.component';
import { FindComponent } from '../find/find.component';
import { DrawShapeComponent } from '../draw-shape/draw-shape.component';
import { TempusProfileComponent } from "../tempus-profile/tempus-profile.component";

@Component({
  selector: 'app-shawn-c1',
  imports: [
      TrumpfrogComponent,
      NumberSortComponent, 
      FindComponent,
      DrawShapeComponent, 
      TempusProfileComponent],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1ComponentShawn {

}
