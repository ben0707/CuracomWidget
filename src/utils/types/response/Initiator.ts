export interface IIdentifierResponse {
  websocket_config: null | WebsocketConfig
  customer: null | ICustomer
  countries: null | ICountryPhoneCode[]
  visitor: null | IVisitor
}

export interface IVisitor {
  uid: string
}

export interface IAgent {
  name: string
  title: string
  avatar: string
}

export interface WebsocketConfig {
  broadcaster: 'reverb'
  key: string
  wsHost: string
  wsPort: number
  wssPort: number
  forceTLS: boolean
  enabledTransports: string[]
  authEndpoint: string
}

export interface ICustomer {
  uid: string
  history: IChatHistory[]
  chat_uid: string
  agent: null | IAgent
}

export interface ICountryPhoneCode {
  name: string
  dial_code: string
  iso_code: string
  phone_number_length: number
  flag: string
}

export interface IChatHistory {
  body: string
  media: null | string
  type: MessageType
  sender: SenderType
  time: string
  avatar: string
}

export enum SenderType {
  CUSTOMER = 'customer',
  AGENT = 'agent',
}

export enum MessageType {
  TEXT = 'text',
  VOICE = 'voice',
  IMAGE = 'image',
  IMAGE_TEXT = 'image-text',
  ATTACHMENT = 'attachment',
}
