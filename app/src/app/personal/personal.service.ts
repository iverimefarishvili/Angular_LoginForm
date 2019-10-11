import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor() { }


  pushInformation() {
    this.appservice.change.next("rame");
    console.log(this.appservice.state)
  }
}
