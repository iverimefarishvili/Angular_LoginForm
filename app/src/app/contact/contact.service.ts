import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private appservice: AppService) { }

  form: FormGroup;

  pushItem() {
    this.appservice.state.contact = {
      email: this.form.value.email,
      phonenumber: this.form.value.phonenumber
    }
  }

}
