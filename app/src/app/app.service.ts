import { Injectable, OnInit, ElementRef } from '@angular/core';
import { Data } from './model';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit{

  constructor() { }

  ngOnInit() {
   
  }

  state = {
    personal: {
      firstname: '',
      lastname: '',
      idnumber: ''
    },
    contact: {
      email: '',
      phonenumber: ''
    },
    message: {
      text: '',
      password: ''
    }
  };

  isSuitable = true;
  called = false;
  error = '';
  timeless = false;
  onBlur = false;
  loginpageIsactive = false;
  personalIsActive = true;
  contactIsActive = false;
  messageIsActive = false;

  personalDisable = false;
  contactDisable = false;

  animation = false;

  isGeorgian(event,element) {
    
    this.called = true;
    
    for(let char of event.target.value) {
      console.log(char);
      if(char.charCodeAt(0)<4304 || char.charCodeAt(0)>4347) {
        element.isSuitable = true;
        element.error = "შეიყვანეთ ქართული ასოები!"
        return 0;
      } else {
        element.isSuitable = false;
      }
    }
  }

  idNumberCheck(event, element) {
 
    for(let el of event.target.value) {
      
      if(el.charCodeAt(0)<48 || el.charCodeAt(0)>57) {
        
        element.isSuitable = true;
        element.error = "შეიყვანეთ მხოლოდ ციფრები!"
        return 0;
      }else{
        if(`${event.target.value}`.length <11){
          element.isSuitable = true;
          element.error = "პირადი ნომერი უნდა იყოს 11 ციფრისგან შემდგარი!"
        } else {
          element.isSuitable = false;
        }
               
      }
    }
    
  }

  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  emailCheck(element, event) {
    if(this.re.test(event.target.value) ){
      element.isSuitable = false;
    } else {
      element.isSuitable = true;
      element.error = "იმეილის ფორმატი არ არის სწორი!"
    }

  }

  phone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g


  phoneCheck(event, element) {
    for(let el of event.target.value) {
      console.log(el.charCodeAt(0))
      if(el.charCodeAt(0)<48 || el.charCodeAt(0)>57) {
        
        element.isSuitable = true;
        element.error = "შეიყვანეთ მხოლოდ ციფრები!"
        return 0;
      }else{
        console.log()
        if(`${event.target.value}`.length <9){
          element.isSuitable = true;
          element.error = "მობილურის ნომერი უნდა იყოს 9 ციფრისგან შემდგარი!"
        } else {
          element.isSuitable = false;
        }
               
      }
    }
  }

  regularExpression =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  passwordcheck(event, element) {
    if(event.target.value.length<8){
      element.error = "პაროლი ძალიან მოკლეა!"
      element.isSuitable = true;
    } else{
      if(!this.regularExpression.test(event.target.value)) {
        element.error = "პაროლი უნდა შეიცავდეს მინიმუმ ერთ რიცხვს,ერთ დიდ ასოს და ერთ სიმბოლოს!"
        element.isSuitable = true;
      } else {
        element.isSuitable = false;
        this.retype();
      }
    }
  }

  
  retype(event?, password?) {
    
    
    if(password.value != event.target.value) {
      password.error = "პაროლები არ ემთქხვევა ერთმანეთს!"
      password.isSuitable = true;
    } else { 
      password.isSuitable = false;
    }
  }


  blurFunction(element) {
    element.onBlur = true;
  }

  focusFuncton(element) {
    element.onBlur = false;
  }



  onclick() {
  

  }
  x = 30;
  digit = 0;
  refreshData() {
    setTimeout(()=>{
      this.digit++;
      console.log(this.digit)
      if(this.digit<30) {
        this.refreshData();
      } else {
        this.animation = false;
      }
    },1000)
  }

 
}
