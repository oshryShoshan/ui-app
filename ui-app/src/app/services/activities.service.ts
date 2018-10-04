import { Injectable } from '@angular/core';
import { DONALD_DUCK_PIC, PETTER_FRIFFIN_PIC } from "../../assets/images";
import { ActivityListItemObj } from "../common/info-widget/infoListItems/activity-list-item/activityListItemModel";

@Injectable()
export class ActivitiesService {

  constructor() { }

  public getActivityData(): ActivityListItemObj[] {
    return <ActivityListItemObj[]> MOCK_DATA;
  }

}

const MOCK_DATA = [
  {
    image: undefined,
    assignee: 'Nina Jones',
    activity: 'added a new project',
    subject: 'Free UI Kit',
    timePassedStr: 'just now'
  },
  {
    image: PETTER_FRIFFIN_PIC,
    assignee: 'Peter Griffin',
    activity: 'commented project',
    subject: 'Free PSD Template',
    timePassedStr: '40 minutes ago'
  },
  {
    image: DONALD_DUCK_PIC,
    assignee: 'Donald Duck',
    activity: 'completed task',
    subject: 'Symu Website',
    timePassedStr: '1 hour ago'
  },
  {
    image: PETTER_FRIFFIN_PIC,
    assignee: 'Peter Griffin',
    activity: 'added a new project',
    subject: 'Free SDP',
    timePassedStr: '3 hours ago'
  },
  {
    image: PETTER_FRIFFIN_PIC,
    assignee: 'Peter Griffin',
    activity: 'completed task',
    subject: 'Some Task',
    timePassedStr: '2 days ago'
  },
  {
    image: undefined,
    assignee: 'Nina Jones',
    activity: 'commented project',
    subject: 'Free PSD Template',
    timePassedStr: '5 days ago'
  }
];
