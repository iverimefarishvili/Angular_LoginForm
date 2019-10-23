import { Component, ElementRef, ViewChild, Renderer2, Directive } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { EventEmitter } from 'events';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(0%)', opacity: 0.3}),
        animate('60000ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 0.4, 'width': "100%"}))
      ])
    ])
  ]
})
export class AppComponent {
  
  @ViewChild(PersonalComponent, {static: false}) personal: PersonalComponent;
  @ViewChild(ContactComponent, {static: false}) contact: ContactComponent;
  @ViewChild(MessageComponent, {static: false}) message: MessageComponent;
  
  
  constructor(public renderer: Renderer2,private appservice: AppService) { }

  ngOnInit() {
    
  }


  
  
 

  next() {
    if(this.appservice.personalIsActive) {
      
      if(this.personal.form.value.firstName.length>0 && this.personal.form.value.lastName.length >0 && `${this.personal.form.value.idNumber}`.length > 0 ) {
        if(!this.personal.name.nativeElement.isSuitable && !this.personal.surname.nativeElement.isSuitable && !this.personal.idnumber.nativeElement.isSuitable) {
          this.appservice.personalDisable = true;
          
          this.personal.pushItem();
          this.appservice.contactIsActive = true;
          this.appservice.personalIsActive = false;
          return;
      }
    }
    }
    if(this.appservice.contactIsActive) {
      
      if(this.contact.form.value.email.length>0 && `${this.contact.form.value.phonenumber}`.length > 0) {
        if(!this.contact.email.nativeElement.isSuitable && !this.contact.phonenumber.nativeElement.isSuitable) {
          this.appservice.animation = true;
          this.appservice.contactDisable = true;
          this.contact.pushItem();
          this.appservice.contactIsActive = false;
          this.appservice.messageIsActive = true;
          //this.Animation();
        
          
          return 0;
        }
      }
    }
  }

  register() {
      if((this.personal.form.value.firstName.length>0 && this.personal.form.value.lastName.length >0 && this.personal.form.value.idNumber.length > 0 && this.contact.form.value.email.length>0 && this.contact.form.value.phonenumber.length > 0 && `${this.message.form.value.text}`.length>0 && this.message.form.value.password.length>0 )) {
         
        if(this.personal.form.disabled && this.contact.form.disabled)  {
          this.message.pushItem(); 
          this.appservice.loginpageIsactive = !this.appservice.loginpageIsactive;
          
        }
      }
      
  }

  back() {
    if(this.appservice.contactIsActive) {
      
      this.appservice.personalIsActive = true;
      this.appservice.contactIsActive = false;
      
      return 0;
    }
    if(this.appservice.messageIsActive) {
      this.appservice.messageIsActive = false;
      this.appservice.contactIsActive = true;
    }
  }

  cancel() {
    window.location.reload();
  }

  messageclick() {
    if(this.appservice.contactDisable && this.appservice.personalDisable) {
      this.appservice.personalIsActive = false;
      this.appservice.messageIsActive = true;
      this.appservice.contactIsActive = false;
    }
  }
  contactclick() {
    if(this.appservice.personalDisable) {
      this.appservice.contactIsActive = true;
      this.appservice.messageIsActive = false;
      this.appservice.personalIsActive = false;
    }
  }

  
}
