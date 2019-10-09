import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personalIsActive = false;
  contactIsActive = false;
  messageIsActive = false;
  
  public click(element) {
    element == !this.personalIsActive;
    console.log(!element)
  }
}
