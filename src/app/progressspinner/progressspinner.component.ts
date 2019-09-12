import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressspinner',
  templateUrl: './progressspinner.component.html',
  styleUrls: ['./progressspinner.component.css']
})
export class ProgressspinnerComponent implements OnInit {

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  constructor() { }

  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 5000)
  }
}
