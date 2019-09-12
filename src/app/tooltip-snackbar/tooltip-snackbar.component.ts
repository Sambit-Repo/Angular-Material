import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";


@Component({
  selector: 'app-tooltip-snackbar',
  templateUrl: './tooltip-snackbar.component.html',
  styleUrls: ['./tooltip-snackbar.component.css']
})
export class TooltipSnackbarComponent implements OnInit {

  constructor(private bar: MatSnackBar) { }

  ngOnInit() {
  }

  show(message) {
    this.bar.open(message);
  }

  show1(message, action) {
    this.bar.open(message, action, { duration: 10000 }).afterDismissed().subscribe(() => console.log("wait for 10 sec"));

  }

  show2(message, action) {

    let barRef = this.bar.open(message, action);


    barRef.afterOpened().subscribe(() => console.log("After Opened"));

    barRef.afterDismissed().subscribe(() => console.log("after dismiss"));

    barRef.onAction().subscribe(() => {
      this.bar.open("item restored")
    })
  }

  config: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    // data: 'Sample Snackbar',
    // announcementMessage: 'custom-snack-bar',
    // panelClass:,
    direction: 'ltr',
    politeness: 'polite',
    // viewContainerRef:,
  };

  openCustomSnackbar() { 
    this.bar.openFromComponent(CustomSnackBarComponent, {
      data:'Sample data',...this.config});
  }
}

@Component({
  selector: 'custom-snackbar',
  template: ` <span style='color: orange'>Custom-Sanck-Bar</span>`
})
export class CustomSnackBarComponent { }
