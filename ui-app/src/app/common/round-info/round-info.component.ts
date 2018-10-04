import {Component, Input, OnInit} from '@angular/core';
import {RoundInfoObj} from "./roundInfoModels";

@Component({
  selector: 'app-round-info',
  templateUrl: './round-info.component.html',
  styleUrls: ['./round-info.component.css']
})
export class RoundInfoComponent implements OnInit {
  @Input() roundInfoObj: RoundInfoObj;
  public value: string | number;
  constructor() { }

  ngOnInit() {
    this.value = (typeof this.roundInfoObj.value == 'string') ? (this.roundInfoObj.value as string).charAt(0) :  this.roundInfoObj.value
  }

}
