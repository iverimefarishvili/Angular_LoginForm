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


  
  next() {
    this.pushItem();
    console.log(this.personalIsActive, this.contactIsActive, this.messageIsActive)
    if(this.personalIsActive) {
      if(this.form.value.firstName.length>0 && this.form.value.lastName.length >0 && this.form.value.idNumber > 0 ) {
        this.contactIsActive = true;
        this.personalIsActive = false;
        this.form.disable()
        //this.div1.nativeElement.style.pointerEvents = 'none';
        return 0;
      }
      
    }
    if(this.contactIsActive) {
      if(this.form2.value.email.length>0 && this.form2.value.phonenumber.length > 0 ) {
        this.contactIsActive = false;
        this.messageIsActive = true;
        this.form2.disable()
        return 0;
      }
    }
  }

  back() {
    if(this.contactIsActive) {
      this.personalIsActive = true;
      this.contactIsActive = false;
      return 0;
    }
    if(this.messageIsActive) {
      this.messageIsActive = false;
      this.contactIsActive = true;
    }
  }

  cancel() {
    window.location.reload();
  }
  



 


}
