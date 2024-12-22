import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TempusResponse} from './models/tempus';
@Component({
  selector: 'app-tempus-profile',
  imports: [],
  templateUrl: './tempus-profile.component.html',
  styleUrl: './tempus-profile.component.css'
})
export class TempusProfileComponent {
  private url:string = 'https://tempus2.xyz/api/v0/players/id/419225/rank'
  public profileURL:string = 'https://avatars.steamstatic.com/cdc73bbfeb4c08e37e46d0e3452dcbfa63733751_full.jpg'
  public jsonData: TempusResponse | null = null
  public class:string = '3'
  constructor(private httpClient: HttpClient){}

  getApiData() {
    try{
      this.httpClient.get<TempusResponse>(this.url).subscribe( result => {
        this.jsonData = result
    }) 
    } catch(error:any){console.error(error)}
  } 
  getClassName(classId: string): string {
    switch (classId) {
      case '3':
        return 'Soldier';
      case '4':
        return 'Demo';
      default:
        return 'Unknown';
    }
  }
}
