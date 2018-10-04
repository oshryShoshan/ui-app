export type MessageListItemObj = {
  image: string,
  assignee: string,
  subject: string,
  overTime: {
    value: number,
    type: string
  },
  hasBeenRead: boolean,
  replayAction: Function,
  configAction: Function
}
