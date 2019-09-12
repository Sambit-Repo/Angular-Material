import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tab',
  templateUrl: './card-tab.component.html',
  styleUrls: ['./card-tab.component.css']
})
export class CardTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(index){
    console.log("index no is : "+index)
  }

}
