import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guido-c5',
  imports: [],
  templateUrl: './c5.component.html',
  styleUrl: './c5.component.css'
})
export class C5Component {

  jsondata:any
  dogPhotoURL:string = 'https://images.dog.ceo/breeds/vizsla/n02100583_7467.jpg'
  
  constructor(private httpClient: HttpClient){}

  getApiData() {
    this.httpClient.get("https://dog.ceo/api/breeds/image/random").subscribe( result => {
      this.jsondata = result
      this.dogPhotoURL = this.jsondata.message;
    }) 
  }

}
