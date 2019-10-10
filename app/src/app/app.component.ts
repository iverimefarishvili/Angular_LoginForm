import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() pushinfo = new EventEmitter();

  personalIsActive = true;
  contactIsActive = false;
  messageIsActive = false;
  
  click(element) {
    //this.personalIsActive = !this.personalIsActive;
    console.log(this.personalIsActive)
  }

 


}
