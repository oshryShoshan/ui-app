import {Component, Input, OnInit} from '@angular/core';
import {RoundInfoObj} from "../../../round-info/roundInfoModels";
import {MessageListItemObj} from "./messageListItemModels";

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.css']
})
export class MessageListItemComponent implements OnInit {

  @Input() messageListItemObj: MessageListItemObj;

  public image;
  public roundInfoObj: RoundInfoObj;

  constructor() { }

  ngOnInit() {
  }

  public onSendMessageClicked() {
    this.messageListItemObj.replayAction && this.messageListItemObj.replayAction();
  }

  public onConfigClicked() {
    this.messageListItemObj.configAction && this.messageListItemObj.configAction();
  }

}
