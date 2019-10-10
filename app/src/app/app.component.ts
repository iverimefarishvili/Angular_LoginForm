import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personalIsActive = true;
  contactIsActive = false;
  messageIsActive = false;
  
  click(element) {
    //this.personalIsActive = !this.personalIsActive;
    console.log(this.personalIsActive)
  }

 


}
