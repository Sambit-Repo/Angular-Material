import { Component, OnInit } from '@angular/core';

export interface NessEmployee {
  name: string,
  age: number,
  edc: string,
  married: boolean
}
export interface NessEmployee1 {
  name: string,
  edc: string,
  age: number
}

const EMPLOYEE_DATA: NessEmployee[] =
  [
    { name: 'Sambit', age: 24, edc: 'Tivo', married: false },
    { name: 'ajit', age: 28, edc: 'Ctfs', married: true },
    { name: 'shiv', age: 27, edc: 'Ctc', married: true },
    { name: 'malikarjun', age: 22, edc: '1WorldSync', married: false },
    { name: 'Dikshita', age: 20, edc: 'Linium', married: false },
  ];
  
const EMPLOYEE_DATA1: NessEmployee1[] =
  [
    { name: 'Sambit', age: 24, edc: 'Tivo' },
    { name: 'ajit', age: 28, edc: 'Ctfs' },
    { name: 'shiv', age: 27, edc: 'Ctc' },
    { name: 'malikarjun', age: 22, edc: '1WorldSync' },
    { name: 'Dikshita', age: 20, edc: 'Linium' },
  ]
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  dataArray = EMPLOYEE_DATA;

  dataArray1 = EMPLOYEE_DATA1;

  columnList: string[] = ['name', 'age', 'edc', 'married'];
  // in web page coloumn data order will be same as given .so the order here is -> name,age,ed,married .May vey Coloumn Header

  columnList1: string[] = ['age', 'edc', 'name'];

  constructor() { }

  ngOnInit() {
  }

  showData(row) {
    console.log(row);
  }
}
