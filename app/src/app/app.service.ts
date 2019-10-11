import { Injectable, OnInit } from '@angular/core';
import { Data } from './model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit{

  constructor() { }

  ngOnInit() {
    this.change.subscribe((data: Data) => {
      this.state.push(data);
    })
  }

  change = new Subject();

  public state: Data[] = [

  ];


  addIngredients() {
    
    console.log(this.state)
  }
}
