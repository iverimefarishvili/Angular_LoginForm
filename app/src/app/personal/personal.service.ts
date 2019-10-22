import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private appservice: AppService) { }

  form: FormGroup;

  pushItem() {
    this.appservice.state.personal = {
      firstname: this.form.value.firstName,
      lastname: this.form.value.lastName,
      idnumber: this.form.value.idNumber
    }
  }
}
