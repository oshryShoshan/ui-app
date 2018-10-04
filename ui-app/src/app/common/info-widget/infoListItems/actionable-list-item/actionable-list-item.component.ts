import {Component, Input, OnInit} from '@angular/core';
import {RoundInfoObj} from "../../../round-info/roundInfoModels";
import {ActionableListItemObj} from "./actionableListItemModels";

const DAY_IN_MILLIS = 1000 * 60 * 60 * 24;
@Component({
  selector: 'app-actionable-list-item',
  templateUrl: './actionable-list-item.component.html',
  styleUrls: ['./actionable-list-item.component.css']
})
export class ActionableListItemComponent implements OnInit {

  @Input() actionableListItem: ActionableListItemObj;

  public roundInfoObj: RoundInfoObj;
  constructor() { }

  ngOnInit() {
    this.roundInfoObj = {
      value: this.actionableListItem.title,
      infoType: "primary"
    }
  }

  public onClick() {
    console.log("onClick");
  }

}
