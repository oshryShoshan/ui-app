export type RoundInfoObj = {
  value: string | number,
  infoType: RoundInfoType,
  display?: boolean
}

export type RoundInfoType =  'primary' | 'secondary';
