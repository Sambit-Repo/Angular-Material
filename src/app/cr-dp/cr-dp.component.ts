import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cr-dp',
  templateUrl: './cr-dp.component.html',
  styleUrls: ['./cr-dp.component.css']
})
export class CrDpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  minDate = new Date(2019, 9, 10);
  maxDate = new Date(2019, 9, 23);

  dateFilter(date: Date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }

}
