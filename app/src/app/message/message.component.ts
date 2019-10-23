import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private appservice: AppService) { }

  ngOnInit() {
  }

  
  @ViewChild('animation', {static: false}) animation: ElementRef;

  @ViewChild('textarea', {static: false}) textarea: ElementRef;
  @ViewChild('password', {static: false}) password: ElementRef;


  form = new FormGroup({
    text: new FormControl(''),
    password: new FormControl('')
  });

  pushItem() {
    this.appservice.state.message = {
      text: this.form.value.text,
      password: this.form.value.password
    }
  }

  
}
