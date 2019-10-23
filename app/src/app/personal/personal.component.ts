import { Component, OnInit, ViewChild, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  isSuitable = true;
  called = false;

  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('surname', {static: false}) surname: ElementRef;
  @ViewChild('idnumber', {static: false}) idnumber: ElementRef;
  @ViewChild('div1', {static: false}) personForm: FormGroup;

  constructor(private appservice: AppService) { }

  ngOnInit() {
    
  }

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    idNumber: new FormControl('')
  });

  pushItem() {
    this.appservice.state.personal = {
      firstname: this.form.value.firstName,
      lastname: this.form.value.lastName,
      idnumber: this.form.value.idNumber
    }
  }
  
  
  
 
}
