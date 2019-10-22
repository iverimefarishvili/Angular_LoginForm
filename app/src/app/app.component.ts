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
  
  @ViewChild('personal', {static: false}) personal: PersonalComponent;
  @ViewChild('contact', {static: false}) contact: ContactComponent;
  @ViewChild('message', {static: false}) message: MessageComponent;
  
  
  constructor(public renderer: Renderer2,private appservice: AppService) { }

  ngOnInit() {
    
  }


  
  
 

  next() {
    if(this.appservice.personalIsActive) {
      this.personal.pushItem();
      this.personal.next();
    }
    if(this.appservice.contactIsActive) {
      this.contact.pushItem();
      this.contact.next();
    }
  }

  register() {
      this.appservice.register(); 
  }

  back() {
    this.appservice.back();
  }

  cancel() {
    window.location.reload();
  }

  messageclick() {
    if(this.personal.form.disabled && this.contact.form2.disabled) {
      this.appservice.personalIsActive = false;
      this.appservice.messageIsActive = true;
      this.appservice.contactIsActive = false;
    }
  }
  contactclick() {
    if(this.personal.form.disabled) {
      this.appservice.contactIsActive = true;
      this.appservice.messageIsActive = false;
      this.appservice.personalIsActive = false;
    }
  }
}
