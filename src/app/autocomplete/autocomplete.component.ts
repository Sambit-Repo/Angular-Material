import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map,startWith } from "rxjs/operators";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    this.filteredOptions = this.myControl.valueChanges.
    pipe(startWith(' '),map(value => this.doFilter(value)))
  }

  myControl = new FormControl();

  filteredOptions : Observable<string[]>;

  objArray = [
    {name:"sambit" , age:24},
    {name:"munna" , age:25},
    {name:"bishnu" , age:26},
  ];

  valueArray : string[] = ["Angular","React","Vue"];

  displayFn(subject){
    return subject ? subject.age : undefined
  };

  private doFilter(value:string):string[]{
  const filteredValue = value.toLowerCase();
  return this.valueArray.filter(Option => Option.toLowerCase().includes(filteredValue))
  }
}
