import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtua-scrolling',
  templateUrl: './virtua-scrolling.component.html',
  styleUrls: ['./virtua-scrolling.component.css']
})
export class VirtuaScrollingComponent implements OnInit {

  numbers=[];

  constructor() {
    for(let i=0;i<1000;i++)
    {
      this.numbers.push(i)
    }
   }

  ngOnInit() {
  }

}
