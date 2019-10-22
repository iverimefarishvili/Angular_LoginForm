import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('email', {static: false}) email: ElementRef;
  @ViewChild('phonenumber', {static: false}) phonenumber: ElementRef;


  constructor(private appservice: AppService) { }

  ngOnInit() {
  }

  form = new FormGroup({
    email: new FormControl(''),
    phonenumber: new FormControl('')
  });

  pushItem() {
    this.appservice.state.contact = {
      email: this.form.value.email,
      phonenumber: this.form.value.phonenumber
    }
  }

  next() {
    if(this.form.value.email.length>0 && `${this.form.value.phonenumber}`.length > 0) {
      if(!this.email.nativeElement.isSuitable && !this.phonenumber.nativeElement.isSuitable) {
        this.form.disable()
        this.appservice.contactIsActive = false;
        this.appservice.messageIsActive = true;
        //this.Animation();
      
        
        return 0;
    }
  }
  }

  
}
