export type ActionableListItemObj = {
  title: string,
  remainedTime: number,
  actions: Action[]
}

export type Action = {
  name: string,
  callback: Function
}
