import { Component, OnInit, ViewChild, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  georgianAlphabet = ['ა','ბ','გ','დ','ე','ვ','ზ','თ','ი','კ','ლ','მ','ნ','ო','პ','ჟ','რ','ს','ტ','უ','ფ','ქ','ღ','ყ','შ','ჩ','ც','ძ','წ','ჭ','ხ','ჯ','ჰ']
  integers = [0,1,2,3,4,5,6,7,8,9]

  isSuitable = true;
  called = false;
  
  @Output() data = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.data.emit("sadasdsadas");
  }

  isGeorgian(event,element) {
    this.called = true;
    
    for(let i of event.target.value) {
      if(this.georgianAlphabet.includes(i)) {
        element.isSuitable = false;
      } else {
        element.isSuitable = true;
        event.target.value = '';
      }
    }
    console.log(this.isSuitable)
  }

  idNumberCheck(event, element) {
    console.log(event.target.type)
    for(let el of event.target.value) {
      console.log(el)
      if(this.integers.includes(parseInt(el))) {
        element.isSuitable = false;
      }else{
        element.isSuitable = true;
        event.target.value = '';
      }
    }
  }

  pushInformation() {
    console.log("yesss")
  }

}
