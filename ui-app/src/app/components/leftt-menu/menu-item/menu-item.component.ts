import {Component, Input, OnInit} from '@angular/core';
import { Action } from "../models";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() action: Action;

  constructor() { }

  ngOnInit() {
    console.log("");

  }

  public onActionClicked() {
    this.action.action();
  }


}
