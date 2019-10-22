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

  form2 = new FormGroup({
    email: new FormControl(''),
    phonenumber: new FormControl('')
  });

  pushItem() {
    this.appservice.state.contact = {
      email: this.form2.value.email,
      phonenumber: this.form2.value.phonenumber
    }
  }
}
