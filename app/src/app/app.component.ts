import { Component, Output, Input, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { NgModel } from '@angular/forms';
import { Data } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  constructor() { }
  @Input('data') data: any;
  ngOnInit() {
    setTimeout(() => {
      console.log(console.log(this.data));  
    }, 5000);
  }

  personalIsActive = true;
  contactIsActive = false;
  messageIsActive = false;
  
  click(element) {
    //this.personalIsActive = !this.personalIsActive;
    console.log(this.personalIsActive)
    
  }

 


}
