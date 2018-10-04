import { Injectable } from '@angular/core';
import {ActionableListItemObj} from "../common/info-widget/infoListItems/actionable-list-item/actionableListItemModels";

@Injectable()
export class TasksServiceService {

  constructor() { }

  public getTasks(): ActionableListItemObj[] {
    return MOCK_DATA;
  }

}

const MOCK_DATA = [
  {
    title: 'New website for Symu.co',
    remainedTime: 8,
    actions: [{name: 'ACTION1', callback: () => {}}]
  },
  {
    title: 'New website for Symu.co',
    remainedTime: 4,
    actions: [{name: 'ACTION1', callback: () => {}}]
  },
  {
    title: 'hahahahahahahahha',
    remainedTime: -2,
    actions: [{name: 'ACTION1', callback: () => {}}]
  },
  {
    title: 'cccccccccccccccco',
    remainedTime: 1,
    actions: [{name: 'ACTION1', callback: () => {}}]
  },
  {
    title: 'website website website website website ',
    remainedTime: 5,
    actions: [{name: 'ACTION1', callback: () => {}}]
  },
  {
    title: 'New website for Symu.co',
    remainedTime: -4,
    actions: [{name: 'ACTION1', callback: () => {}}]
  },
]
