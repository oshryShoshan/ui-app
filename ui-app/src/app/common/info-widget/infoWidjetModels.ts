import {ActionableListItemObj} from "./infoListItems/actionable-list-item/actionableListItemModels";
import {MessageListItemObj} from "./infoListItems/message-list-item/messageListItemModels";
import {ActivityListItemObj} from "./infoListItems/activity-list-item/activityListItemModel";

export type InfoWidgetObj = {
  title: string
  infoListType: EInfoListType,
  list: ActionableListItemObj[] | MessageListItemObj[] | ActivityListItemObj[]
}

export enum EInfoListType {
  actionableList = 1,
  messageList = 2,
  activityList = 3
}

