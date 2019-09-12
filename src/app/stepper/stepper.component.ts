import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  x:string = "H.K.Samal";
  y:string = "S.R.Samal";

  show(){
    alert("your order is placed.");
  }

}
