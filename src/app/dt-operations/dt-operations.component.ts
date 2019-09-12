import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatSort,MatPaginator } from "@angular/material";

export interface Student{
  id:number,
  name:string,
  regNo:number,
  branch:string,
  section:string,
  yop:number
}

const STUDENT_DATA: Student[] =
[
  {id:1,name:"Sambit",regNo:2131,branch:"CSE",section:"B",yop:2016},
  {id:2,name:"Saswat",regNo:2021,branch:"ECE",section:"A",yop:2015},
  {id:3,name:"Adarsh",regNo:2029,branch:"MECH",section:"C",yop:2014},
  {id:4,name:"Jagjeet",regNo:2128,branch:"EEE",section:"D",yop:2014},
  {id:5,name:"Sameer",regNo:2179,branch:"CIVIL",section:"A",yop:2015},
  {id:6,name:"Samsul",regNo:1564,branch:"EE",section:"B",yop:2016},
  {id:7,name:"Manjeet",regNo:1789,branch:"CSE",section:"C",yop:2016},
  {id:8,name:"Sidharth",regNo:829,branch:"EEE",section:"D",yop:2015},
  {id:9,name:"Debasis",regNo:1456,branch:"ECE",section:"A",yop:2014},
  {id:10,name:"Rajiv",regNo:375,branch:"CIVIL",section:"C",yop:2016}
];

@Component({
  selector: 'app-dt-operations',
  templateUrl: './dt-operations.component.html',
  styleUrls: ['./dt-operations.component.css']
})
export class DtOperationsComponent implements OnInit {


  @ViewChild(MatSort,{static:true}) sort:MatSort;

  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;

  myDataArray = new MatTableDataSource(STUDENT_DATA);

  columnDisplayed:string[] = ["id","name","regNo","branch","section","yop"];

  constructor() { }

  ngOnInit() {
    this.myDataArray.sort=this.sort;
    this.myDataArray.paginator=this.paginator;
  }

  applyFilter(filterValue:string){
    this.myDataArray.filter = filterValue.trim().toLowerCase();
  }

}
