import { Component, Output, Input, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { NgModel } from '@angular/forms';
import { Data } from './model';
import { Subject } from 'rxjs';
import { AppService } from './app.service';
import { PersonalService } from './personal/personal.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
   
  personalIsActive = true;
  contactIsActive = false;
  messageIsActive = false;

  constructor(private appservice: AppService, private personalservice: PersonalService) { }

  ngOnInit() {
    
  }

  
  
  click() {
    //this.personalIsActive = !this.personalIsActive;
    //console.log(this.personalIsActive)
    this.appservice.addIngredients();
  }

  onPush() {
    
  }

  



 


}
