import { Injectable } from '@angular/core';
import {MessageListItemObj} from "../common/info-widget/infoListItems/message-list-item/messageListItemModels";
import {DONALD_DUCK_PIC, MICKY_MOUSE_PIC, PETTER_FRIFFIN_PIC} from "../../assets/images";

@Injectable()
export class MessagesService {

  constructor() { }

  public getMessages(): MessageListItemObj[] {
    return MOCK_DATA.map(item => {
      return {
        ...item,
        configAction: this.onConfigEvent.bind(this),
        replayAction: this.onSendMessageEvent.bind(this)
      }
    });
  }

  private onSendMessageEvent($event) {
    console.log("onSendMessageEvent", $event)
  }

  private onConfigEvent($event) {
    console.log("onConfigEvent", $event)
  }

}

const MOCK_DATA = [
  {
    image: MICKY_MOUSE_PIC,
    hasBeenRead: true,
    subject: 'HELLO :)',
    assignee: 'micky mouse',
    overTime: {value: 3, type: 'hours'},
  },
  {
    image: undefined,
    hasBeenRead: false,
    subject: 'Hey You! its me again :) attached new...',
    assignee: 'Nina Jones',
    overTime: {value: 1, type: 'days'},
  },
  {
    image: DONALD_DUCK_PIC,
    hasBeenRead: true,
    subject: 'qwak....',
    assignee: 'donald duck',
    overTime: {value: 3, type: 'days'},
  },
  {
    image: PETTER_FRIFFIN_PIC,
    hasBeenRead: false,
    subject: 'Hey You! Hey You!Hey YoYou!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!u!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!You!Hey You!Hey You!Hey You!Hey You!Hey You!Hey You!You!Hey You!Hey You!',
    assignee: 'Peter Griffin',
    overTime: {value: 1, type: 'days'},
  }
]
