import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form2 = new FormGroup({
    message: new FormControl(''),
    password: new FormControl('')
  });

}
