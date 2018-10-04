import {Component, Input, OnInit} from '@angular/core';
import {ActivityListItemObj} from "./activityListItemModel";

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.css']
})

export class ActivityListItemComponent implements OnInit {
  @Input() activityListItemObj: ActivityListItemObj;
  @Input() isFirst;
  @Input() isLast;

  constructor() { }

  ngOnInit() {
    console.log("ActivityListItemComponent init");
    /*this.activityListItemObj = {
      image: undefined,
      assignee: 'bart sim',
      activity: 'added a new project',
      subject: 'Free UI Kit',
      timePassedStr: 'just now'
    };*/
  }

}
