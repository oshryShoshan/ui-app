import {Component, Input, OnInit} from '@angular/core';
import { InfoWidgetHeader } from "./info-widget-header/infoWidgetHeaderModels";
import {EInfoListType, InfoWidgetObj} from "./infoWidjetModels";
import {ActionableListItemObj} from "./infoListItems/actionable-list-item/actionableListItemModels";
import {MessageListItemObj} from "./infoListItems/message-list-item/messageListItemModels";

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.css']
})
export class InfoWidgetComponent implements OnInit {

  @Input() infoWidgetObj: InfoWidgetObj;

  public infoWidgetHeader: InfoWidgetHeader
  public _EInfoListType = EInfoListType;
  public localList;

  constructor() {

  }

  ngOnInit() {
    this.infoWidgetHeader = {
      primeRoundInfoObj: {
        value: this.calculatePrimValue(),
        display: true,
        infoType: "primary"
      } ,
      secRoundInfoObj: {
        value: this.calculateSecondaryValue(),
        display: this.infoWidgetObj.infoListType == EInfoListType.actionableList,
        infoType: "secondary"
      },
      widgetTitle: this.infoWidgetObj.title
    }
    this.localList = this.infoWidgetObj.list.slice(0,4);
  }

  private calculatePrimValue(): number {
    switch (this.infoWidgetObj.infoListType) {
      case EInfoListType.actionableList:
        const localActionableList: ActionableListItemObj[] = <ActionableListItemObj[]>this.infoWidgetObj.list;
        let actionSum = 0;

        localActionableList.forEach(item => {
          if (item.remainedTime > 0) actionSum++;
        });

        return actionSum;
      case EInfoListType.messageList:
        const locaMessageslList: MessageListItemObj[] = <MessageListItemObj[]>this.infoWidgetObj.list;
        let messagesSum = 0;

        locaMessageslList.forEach(item => {
          if (!item.hasBeenRead) messagesSum++;
        });

        return messagesSum;
      case EInfoListType.activityList:
        return this.infoWidgetObj.list.length;
      default:
        return 0;

    }
  }

  private calculateSecondaryValue() {
    switch (this.infoWidgetObj.infoListType) {
      case EInfoListType.actionableList:
        const localList: ActionableListItemObj[] = <ActionableListItemObj[]>this.infoWidgetObj.list;
        let sum = 0;

        localList.forEach(item => {
          if (item.remainedTime < 0) sum++;
        });

        return sum;
      case EInfoListType.messageList:
        return 0;

      default:
        return 0;

    }
  }
  public getTrackByFn() {
    return this.trackByFn.bind(this);
  }
  public trackByFn(index, item) {
    item = {
      ...item,
      isFirst: index == 0,
      isLast: index == this.localList.length
    };
    return index;
  }
}
