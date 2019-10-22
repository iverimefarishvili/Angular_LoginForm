import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private appservice: AppService) { }

  form: FormGroup;

  pushItem() {
    this.appservice.state.message = {
      text: this.form.value.text,
      password: this.form.value.password
    }
  }
}
